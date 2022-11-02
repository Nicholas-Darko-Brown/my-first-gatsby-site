import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { MDXProps, NodeProps } from '../types/models'

const BlogPage = ({ data }: any) => {
    console.log(data);
    return (
        <Layout pageTitle="My Blog Posts">
            <h2>My cool posts will go in here</h2>

            {data.allMdx.nodes.map((mdx: MDXProps) => (
                <article key={mdx.id} className="py-2"> 
                    <h3 className='font-medium'>{mdx.frontmatter.title}</h3>
                    <span> Date Posted: {mdx.frontmatter.date} </span>
                    <p> {mdx.excerpt} </p>
                    <span> Date Updated: {mdx.parent.modifiedTime} </span>
                    <p> Author: {mdx.frontmatter.author} </p>
                </article>
            ))}

        </Layout>
    )
}

// Page Query
export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                    author
                }
                id
                excerpt
                parent {
                    ... on File {
                        id
                        name
                        modifiedTime(formatString: "MMMM D, YYYY")
                    }
                }
            }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage