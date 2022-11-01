import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Box, Button } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="Hello everyone, my name is Kofi Nti">
            {/* <h1>Hello everyone, my name is Kofi Nti</h1> */}
            <p>This is my first Gatsby site and I'm excited already!</p>
            {/* <Link to={"/"}>Home</Link> */}
            <Box p={4}>
                <Button variant="contained">Hello gatsby-theme-material-ui</Button>
            </Box>

            <StaticImage src='../images/profile-pic.png' alt='my shadow photo' />
        </Layout>
    )
}

export const Head = () => <title>About me</title>

export default AboutPage