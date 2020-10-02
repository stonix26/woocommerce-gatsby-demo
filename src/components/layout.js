import React from "react"
import PropTypes from "prop-types"

import { Container } from "react-bootstrap"

import Navbar from "./navBar"
import Footer from "./footer"

const Layout = ({ children, pageInfo }) => (
  <>
    <Container fluid className="px-0 main">
      <Navbar pageInfo={pageInfo} />
      <main>{children}</main>
    </Container>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
