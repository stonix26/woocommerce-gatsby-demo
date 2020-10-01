import React from "react"
import Img from "gatsby-image"
import { Col } from "react-bootstrap"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const ProductCard = product => (
  <Col>
    <div className={styles.productCard}>
      <p className={styles.productName}>{product.name}</p>
      <Img
        fluid={data.manaBottle.childImageSharp.fluid}
        objectFit="cover"
        alt="Mana"
      />
      <p>{product.description}</p>
      <p className={styles.price}>{product.price}</p>
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
)

export default ProductCard
