import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql, Link } from 'gatsby'
import { MDXProps } from '../../types/models'

const BlogPage = ({ data }: any) => {

    return (
        <Layout pageTitle="My Blog Posts">
            <h2>My cool posts will go in here</h2>

            {data.allMdx.nodes.map((node: MDXProps) => (
                <article key={node.id} className="py-2">
                    <h3 className='font-medium text-blue-600 underline'>
                        <Link to={`/blog/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h3>
                    <span> Date Posted: {node.frontmatter.date} </span>
                    {/* <p> {node.excerpt} </p> */}
                    {/* <span> Date Updated: {node.parent.modifiedTime} </span> */}
                    {/* <p> Author: {node.frontmatter.author} </p> */}
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
                    slug
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