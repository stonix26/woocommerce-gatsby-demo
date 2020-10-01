import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Card, Container } from "react-bootstrap"

export default function Blogs({ data }) {
  return (
    <Layout>
      <SEO title="BLOGS" />
      {data.allWpPost.nodes.map(node => (
        <Container>
          <Card>
            <Card.Body>
              <Link to={`/${node.slug}`}>
                <Card.Title>{node.title}</Card.Title>
              </Link>
              <Card.Text dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </Card.Body>
          </Card>
        </Container>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
