import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import { BiBrain } from "react-icons/bi"
// import { TiTimesOutline } from "react-icons/ti"
// import { RiHeartPulseFill } from "react-icons/ri"
// import { BsFillDropletFill } from "react-icons/bs"
// import { ImPlus } from "react-icons/im"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./index.module.scss"

export default function Home({ data }) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Layout>
      <SEO title="HOME" />
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
              <Link to="/blogs" className="mana-btn-primary">
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
              <span className="text-highlight">energy</span>,{" "}
              <span className="text-highlight">mental clarity</span> and
              <span className="text-highlight"> focus</span> without the crash
              or jittery feeling. <span className="text-highlight">MANA</span>{" "}
              contains{" "}
              <span className="text-highlight">no artificial ingredients</span>{" "}
              and was specifically design for you.
            </p>
            <p>
              Whether you are an athlete, parent, student, or a person who
              simply needs a boost of energy throughout the day. Conquer your
              day with
              <span className="text-highlight"> MANA!</span>
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
        <Row>
          <Col>
            <h3>OUR PRODUCTS</h3>
          </Col>
        </Row>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={true}
          indicators={false}
          nextIcon={
            <MdNavigateNext style={{ fontSize: "2.5em", opacity: "0.75" }} />
          }
          prevIcon={
            <MdNavigateBefore style={{ fontSize: "2.5em", opacity: "0.75" }} />
          }
        >
          <Carousel.Item>
            <Container>
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
                    <Link to="/" className="mana-btn-primary">
                      ADD TO CART
                    </Link>
                  </div>
                  <div className={styles.learnMoreContainer}>
                    <Link to="/" className="mana-transparent-btn">
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
                    <Link to="/" className="mana-btn-primary">
                      ADD TO CART
                    </Link>
                  </div>
                  <div className={styles.learnMoreContainer}>
                    <Link to="/" className="mana-transparent-btn">
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
                    <Link to="/" className="mana-btn-primary">
                      ADD TO CART
                    </Link>
                  </div>
                  <div className={styles.learnMoreContainer}>
                    <Link to="/" className="mana-transparent-btn">
                      LEARN MORE
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
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
                    <Link to="/" className="mana-btn-primary">
                      ADD TO CART
                    </Link>
                  </div>
                  <div className={styles.learnMoreContainer}>
                    <Link to="/" className="mana-transparent-btn">
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
                    <Link to="/" className="mana-btn-primary">
                      ADD TO CART
                    </Link>
                  </div>
                  <div className={styles.learnMoreContainer}>
                    <Link to="/" className="mana-transparent-btn">
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
                    <Link to="/" className="mana-btn-primary">
                      ADD TO CART
                    </Link>
                  </div>
                  <div className={styles.learnMoreContainer}>
                    <Link to="/" className="mana-transparent-btn">
                      LEARN MORE
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className={styles.moreProductSection}>
        <Row className="align-items-center mb-5">
          <Col md="5">
            <p className={styles.descTitle}>
              MANA LIFE
              <br />
              ENERGY SHOTS
            </p>
            <p className={styles.descContent}>
              <span className="text-highlight">MANA Life shots</span> give you
              quick energy boost in the healthiest way possible. Formulated from
              the purest blend of natural herbs, say goodbye to jitters and
              focus on getting an extra boost in your energy levels and
              enhancing athletic performance every day!
            </p>
            <Link to="/" className="mana-btn-primary">
              READ MORE
            </Link>
          </Col>
          <Col md="7" className={styles.colImgRight}>
            <Img
              fluid={data.manaShot.childImageSharp.fluid}
              objectFit="cover"
              alt="Mana"
            />
          </Col>
        </Row>
        <Row className="align-items-center mt-5">
          <Col md="7" className={styles.colImgLeft}>
            <Img
              fluid={data.manaShot.childImageSharp.fluid}
              objectFit="cover"
              alt="Mana"
            />
          </Col>
          <Col md="5">
            <p className={styles.descTitle}>
              MANA LIFE
              <br />
              IMMUNITY SHOTS
            </p>
            <p className={styles.descContent}>
              <span className="text-highlight">MANA Life shots</span> are packed
              with the healthiest ingredients to help you sustain a healthy
              body! Whether you want to fight off colds and flu or simple
              strenthen you immunity defense, immunity shots are your regular
              dose of potent vitamin C.
            </p>
            <Link to="/" className="mana-btn-primary">
              READ MORE
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h4>BENEFITS OF MANA</h4>
          </Col>
        </Row>
        <Carousel
          controls={true}
          indicators={false}
          nextIcon={
            <MdNavigateNext style={{ fontSize: "2.5em", opacity: "0.75" }} />
          }
          prevIcon={
            <MdNavigateBefore style={{ fontSize: "2.5em", opacity: "0.75" }} />
          }
        >
          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <Img
                    fluid={data.benefitsImg1.childImageSharp.fluid}
                    objectFit="cover"
                    alt="Mana"
                  />
                </Col>
                <Col>
                  <Img
                    fluid={data.benefitsImg2.childImageSharp.fluid}
                    objectFit="cover"
                    alt="Mana"
                  />
                </Col>
                <Col>
                  <Img
                    fluid={data.benefitsImg3.childImageSharp.fluid}
                    objectFit="cover"
                    alt="Mana"
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
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

    manaShot: file(relativePath: { eq: "Img-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 420) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    benefitsImg1: file(relativePath: { eq: "Img-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 420) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    benefitsImg2: file(relativePath: { eq: "Img-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 420) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    benefitsImg3: file(relativePath: { eq: "Img-5.png" }) {
      childImageSharp {
        fluid(maxWidth: 420) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
