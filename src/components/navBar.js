import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { Navbar, Nav, Container } from "react-bootstrap"
import { AiOutlineShoppingCart } from "react-icons/ai"

const CustomNavbar = ({ pageInfo }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Container>
      <Navbar variant="light" id="site-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Home
              </Nav.Link>
            </Link>
            <Link to="/blogs" className="link-no-style">
              <Nav.Link as="span" eventKey="blogs">
                Shop
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            {data.site.siteMetadata?.title || `Title`}
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Try Free
              </Nav.Link>
            </Link>
            <Link to="/blogs" className="link-no-style">
              <Nav.Link as="span" eventKey="blogs">
                Login
              </Nav.Link>
            </Link>
            <Link to="/blogs" className="link-no-style">
              <Nav.Link as="span" eventKey="blogs">
                <AiOutlineShoppingCart />
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default CustomNavbar
