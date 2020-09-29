/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <>
    <Container fluid className="px-0 main">
      <Navbar pageInfo={pageInfo} />
      <main>{children}</main>
    </Container>
    <Container fluid className="px-0">
      <Row noGutters>
        <Col className="footer-col">
          <footer>
            <span>
              &copy; {new Date().getFullYear()}{" "}
              {`Mana. All Rights Reserved. Powered by {dna:micro}`}
            </span>
          </footer>
        </Col>
      </Row>
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
