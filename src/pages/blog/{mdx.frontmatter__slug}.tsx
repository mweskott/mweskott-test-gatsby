import { graphql } from 'gatsby';
import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';
import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({data, children}) => {
  console.log("props: ", data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      {children}
    </Layout>
  )
}


export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      id
    }
  }
`
export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost
