import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import { BiBrain } from "react-icons/bi"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./index.module.scss"

import jsonData from "../../temp/home.json"

export default function Home({ data }) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const {
    seo_title,
    banner_title,
    banner_subtitle,
    section_2_desc,
    section_2_benefits,
    section_3_title,
    section_3_desc,
    section_4_title,
    section_4_products,
    section_5_title,
    section_5_content,
    section_6_title,
    section_6_content,
    mana_benefits_title,
    mana_benefits,
    section_8_title,
    section_8_desc,
  } = jsonData

  return (
    <Layout>
      <SEO title={seo_title} />
      <Container
        fluid
        className={styles.bannerContainer}
        style={{ backgroundImage: `url(${data.bannerBG.publicURL})` }}
      >
        <Container>
          <Row className="align-items-center">
            <Col>
              <p>{banner_subtitle}</p>
              <h1 dangerouslySetInnerHTML={{ __html: banner_title }} />
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
              <p className={styles.detailText}>{section_2_desc}</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center pt-4">
            {section_2_benefits.map((item, index) => (
              <Col className={styles.col} key={index}>
                <BiBrain className={styles.icons} />
                <p>{item.desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Container className={styles.manaDescContainer}>
        <Row className="align-items-center">
          <Col className="pr-5">
            <h2>{section_3_title}</h2>
            <div dangerouslySetInnerHTML={{ __html: section_3_desc }} />
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
            <h3>{section_4_title}</h3>
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
          {section_4_products.map((slideItem, index) => (
            <Carousel.Item key={index}>
              <Container>
                <Row>
                  {slideItem.slide.map((productItem, index) => (
                    <Col key={index}>
                      <div className={styles.productCard}>
                        <p className={styles.productName}>
                          {productItem.product_name}
                        </p>
                        <Img
                          fluid={data.manaBottle.childImageSharp.fluid}
                          objectFit="cover"
                          alt="Mana"
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <p className={styles.price}>
                          {productItem.product_price}
                        </p>
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
                  ))}
                </Row>
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Container className={styles.moreProductSection}>
        <Row className="align-items-center mb-5">
          <Col md="5">
            <p
              className={styles.descTitle}
              dangerouslySetInnerHTML={{ __html: section_5_title }}
            />
            <p
              className={styles.descContent}
              dangerouslySetInnerHTML={{ __html: section_5_content }}
            />
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
            <p
              className={styles.descTitle}
              dangerouslySetInnerHTML={{ __html: section_6_title }}
            />
            <p
              className={styles.descContent}
              dangerouslySetInnerHTML={{ __html: section_6_content }}
            />
            <Link to="/" className="mana-btn-primary">
              READ MORE
            </Link>
          </Col>
        </Row>
      </Container>
      <Container fluid className={styles.benefitsSection}>
        <Row>
          <Col>
            <h4>{mana_benefits_title}</h4>
          </Col>
        </Row>
        <Carousel
          controls={true}
          indicators={false}
          nextIcon={
            <MdNavigateNext
              style={{ fontSize: "2.5em", color: "black", opacity: "0.5" }}
            />
          }
          prevIcon={
            <MdNavigateBefore
              style={{ fontSize: "2.5em", color: "black", opacity: "0.5" }}
            />
          }
        >
          <Carousel.Item>
            <Container>
              <Row>
                {mana_benefits.map((item, index) => (
                  <Col className={styles.benefitsCard} key={index}>
                    <Img
                      fluid={data[item.img_name].childImageSharp.fluid}
                      objectFit="cover"
                      alt="Mana"
                    />
                    <p>{item.desc}</p>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container className={styles.whatsManaSection}>
        <Row className="align-items-center">
          <Col md="7">
            <h5>{section_8_title}</h5>
            <p dangerouslySetInnerHTML={{ __html: section_8_desc }} />
          </Col>
          <Col md="5">
            <Img
              fluid={data.benefitsImg2.childImageSharp.fluid}
              objectFit="cover"
              alt="Mana"
            />
          </Col>
        </Row>
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
