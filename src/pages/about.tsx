import * as React from 'react'
import Layout from '../components/layout'
import { Box, Button } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="Hello everyone, my name is Kofi Nti">
            <p>This is my first Gatsby site and I'm excited already!</p>
            <Box p={4}>
                <Button variant="contained">Hello gatsby-theme-material-ui</Button>
            </Box>

            <StaticImage src='../images/profile-pic.png' alt='my shadow photo' />
        </Layout>
    )
}

export const Head = () => <title>About me</title>

export default AboutPage