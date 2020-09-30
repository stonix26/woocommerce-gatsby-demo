import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import { BiBrain } from "react-icons/bi"
// import { TiTimesOutline } from "react-icons/ti"
// import { RiHeartPulseFill } from "react-icons/ri"
// import { BsFillDropletFill } from "react-icons/bs"
// import { ImPlus } from "react-icons/im"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
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
                <span>That's</span>
                <br />
                MANA.
              </h1>
              <Link to="/blogs" className={styles.btnCta}>
                SHOP NOW
              </Link>
            </Col>
            <Col />
          </Row>
        </Container>
      </Container>
      <Container fluid className={styles.sectionDetails}>
        <Container className={styles.detailContainer}>
          <Row className="justify-content-md-center align-items-center pb-5">
            <Col>
              <p className={styles.detailText}>
                Out with the fake, in with the natural, MANA blends premium
                plant extracts to produce the clean boost your body craves.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center pt-4">
            <Col className={styles.col}>
              <BiBrain className={styles.icons} />
              <p>Improves mood and memory</p>
            </Col>
            <Col className={styles.col}>
              <BiBrain className={styles.icons} />
              <p>No Crash or jitterness</p>
            </Col>
            <Col className={styles.col}>
              <BiBrain className={styles.icons} />
              <p>Improves athletic performance</p>
            </Col>
            <Col className={styles.col}>
              <BiBrain className={styles.icons} />
              <p>Increase general resistance to daily stress</p>
            </Col>
            <Col className={styles.col}>
              <BiBrain className={styles.icons} />
              <p>Enhances ATP production and helps increase energy levels</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className={styles.manaDescContainer}>
        <Row className="align-items-center">
          <Col className="pr-5">
            <h2>MANA</h2>
            <p>
              Our herbal proprietary blend replineshes you{" "}
              <span className={styles.textHighlight}>energy</span>,{" "}
              <span className={styles.textHighlight}>mental clarity</span> and
              <span className={styles.textHighlight}> focus</span> without the
              crash or jittery feeling.{" "}
              <span className={styles.textHighlight}>MANA</span> contains{" "}
              <span className={styles.textHighlight}>
                no artificial ingredients
              </span>{" "}
              and was specifically design for you.
            </p>
            <p>
              Wether you are an athlete, parent, student, or a person who simply
              needs a boost of energy throughout the day. Conquer your day with
              <span className={styles.textHighlight}> MANA!</span>
            </p>
          </Col>
          <Col className="pl-5">
            <Img
              fluid={data.manaImg.childImageSharp.fluid}
              objectFit="cover"
              alt="Mana"
            />
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        className={styles.productContainer}
        style={{ backgroundImage: `url(${data.productBG.publicURL})` }}
      >
        <Container>
          <Row>
            <Col>
              <h3>OUR PRODUCTS</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.productCard}>
                <p className={styles.productName}>Mana (30 Capsules)</p>
                <Img
                  fluid={data.manaBottle.childImageSharp.fluid}
                  objectFit="cover"
                  alt="Mana"
                />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p className={styles.price}>$34.99</p>
                <div className={styles.starContainer}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <Link to="/" className={styles.addCartBtn}>
                  ADD TO CART
                </Link>
              </div>
              <div className={styles.learnMoreContainer}>
                <Link to="/" className={styles.learnBtn}>
                  LEARN MORE
                </Link>
              </div>
            </Col>
            <Col>
              <div className={styles.productCard}>
                <p className={styles.productName}>Mana 3x Supply</p>
                <Img
                  fluid={data.manaBottle.childImageSharp.fluid}
                  objectFit="cover"
                  alt="Mana"
                />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p className={styles.price}>$53.99</p>
                <div className={styles.starContainer}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <Link to="/" className={styles.addCartBtn}>
                  ADD TO CART
                </Link>
              </div>
              <div className={styles.learnMoreContainer}>
                <Link to="/" className={styles.learnBtn}>
                  LEARN MORE
                </Link>
              </div>
            </Col>
            <Col>
              <div className={styles.productCard}>
                <p className={styles.productName}>Mana Case</p>
                <Img
                  fluid={data.manaBottle.childImageSharp.fluid}
                  objectFit="cover"
                  alt="Mana"
                />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p className={styles.price}>$191.99</p>
                <div className={styles.starContainer}>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <Link to="/" className={styles.addCartBtn}>
                  ADD TO CART
                </Link>
              </div>
              <div className={styles.learnMoreContainer}>
                <Link to="/" className={styles.learnBtn}>
                  LEARN MORE
                </Link>
              </div>
            </Col>
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

    manaImg: file(relativePath: { eq: "Img-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 820) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    productBG: file(relativePath: { eq: "Section-1.png" }) {
      publicURL
    }

    manaBottle: file(relativePath: { eq: "1x-Bottle.png" }) {
      childImageSharp {
        fluid(maxWidth: 420) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
