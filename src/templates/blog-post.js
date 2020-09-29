import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        {!!post?.featuredImage?.node?.remoteFile?.childImageSharp && (
          <Img
            fluid={post.featuredImage.node.remoteFile.childImageSharp.fluid}
            objectFit="cover"
            alt={post.title}
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
            remoteFile {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
