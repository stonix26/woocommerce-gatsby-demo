import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./index.module.scss"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <Container
        fluid
        className={styles.bannerContainer}
        style={{ backgroundImage: `url(${data.bannerBG.publicURL})` }}
      >
        <Container>
          <Row className="align-items-center">
            <Col>
              <p>
                A Natural Energy Supplement that increases mental clarity, focus
                and performance
              </p>
              <h1>
                <span>That's</span> MANA
              </h1>
              <Link to="/blogs" className={styles.btnCta}>
                SHOP NOW
              </Link>
            </Col>
            <Col />
          </Row>
        </Container>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    bannerBG: file(relativePath: { eq: "Hero-Section.png" }) {
      publicURL
    }
  }
`
