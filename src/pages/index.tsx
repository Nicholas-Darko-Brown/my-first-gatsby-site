// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to my Gatsby site!">
      {/* <h1>Welcome to my Gatsby site!</h1> */}
      <p>I'm making this by following the Gatsby Tutorial.</p>
      {/* <Link to={"/about"}>About</Link> */}
      <StaticImage src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large' alt='a dog sitting pretty' />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage