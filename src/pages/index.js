import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from "../components/layout"

import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`


export default ({ data }) => (
  <Layout >
    <SEO title="Home" />
    <div>      
      {
        data.allMarkdownRemark.edges.map(({node}) => {
          console.log(node);
          return (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>{ node.frontmatter.title } - {node.frontmatter.date}</BlogTitle> 
              <Img fluid={node.frontmatter.image.childImageSharp.fluid}/>                            
            </BlogLink>
            
            <p>{node.excerpt}</p>
          </div>
        )})
      }
      
    </div>    
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }  
          fields {
            slug
          }     
          excerpt
        }
      }
    }
  }
`
