import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap"
import { RiFacebookFill } from "react-icons/ri"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

import styles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      manaLogo: file(relativePath: { eq: "mana-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 820) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Container fluid className={styles.footer}>
      <Container>
        <Row className={styles.footerRowMenu}>
          <Col md="3" className={styles.logoContainer}>
            <Img
              fluid={data.manaLogo.childImageSharp.fluid}
              as={Image}
              objectFit="cover"
              alt="Mana Logo"
            />
          </Col>
          <Col md="2" className={styles.menuContainer}>
            <p className={styles.menuTitle}>Information</p>
            <Link to="/" className={styles.menu}>
              Home
            </Link>
            <Link to="/" className={styles.menu}>
              Shop
            </Link>
            <Link to="/" className={styles.menu}>
              Our Story
            </Link>
            <Link to="/" className={styles.menu}>
              Try Free
            </Link>
            <Link to="/" className={styles.menu}>
              Login
            </Link>
          </Col>
          <Col md="2">
            <p className={styles.menuTitle}>Social</p>
            <div className={styles.socialContainer}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RiFacebookFill />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <AiOutlineTwitter />
              </a>
            </div>
          </Col>
          <Col md="5">
            <p className={styles.menuTitle}>Newsletter</p>
            <Form className={styles.footerForm}>
              <Form.Row>
                <Col>
                  <Form.Label>
                    Subscribe to our newsletter to receive 15% off!
                  </Form.Label>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col xs="9">
                  <Form.Control type="email" />
                </Col>
                <Col xs="3">
                  <Button type="submit" className="btn-primary btn-block">
                    Sign up
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className={styles.footerCol}>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              {`Mana. All Rights Reserved. Powered by {dna:micro}`}
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Footer
