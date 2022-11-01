import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import { NodeProps } from '../types/models'

const BlogPage = ({ data }: any) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
            <ul>
                { data.allFile.nodes.map((node: NodeProps, index: number) => (
                    <li key={index}> {node.name} </li>
                )) }
            </ul>
        </Layout>
    )
}

// Page Query
export const query = graphql`
    query MyQuery {
        allFile {
            nodes {
                name
        }
    }
}
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage