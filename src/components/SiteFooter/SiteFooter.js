import footerData from "@/data/siteFooter";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import FooterList from "./FooterList";

const { bg, logo, text, author, year, links, socials, text2, shape } =
  footerData;

const SiteFooter = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <footer
      className="footer-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row>
          <Col lg={4} md={6} sm={8}>
            <div className="footer-about mt-10">
              <Link href="/">
                <Image src={logo.src} alt="" />
              </Link>
              <p>{text}</p>
              <ul>
                {socials.map(({ id, icon, href }) => (
                  <li key={id}>
                    <a href={href}>
                      <i className={icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

        
        </Row>
        <Row>
          <Col lg={12}>
            <div className="footer-copyright text-center">
              <p>
                © Copyright {year} by {author}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-shape">
        <Image src={shape.src} alt="" />
      </div>
    </footer>
  );
};

export default SiteFooter;
