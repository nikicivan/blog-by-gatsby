import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout'; 

const PostContainer = styled.div`
    text-align: justify;
    margin-bottom: 5rem;
`

export default ({ data }) => {
    const post = data.markdownRemark;
    console.log(post);
    return (
        <Layout>
            <PostContainer>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />                
            </PostContainer>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug } }) {
            html
            frontmatter {
                title                     
            }
        }
    }
`