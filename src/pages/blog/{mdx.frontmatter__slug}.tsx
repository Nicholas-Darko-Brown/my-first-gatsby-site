import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const BlogPost = ({ data, children }: any) => {
  console.log(children);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p> {data.mdx.frontmatter.date} </p>
      <span> Author: {data.mdx.frontmatter.author} </span>
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
        author
    }
  }
}
`

export const Head = ({ data }: any) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost