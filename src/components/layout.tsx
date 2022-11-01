import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { LayoutProps } from '../types/models'

const Layout = ({ pageTitle, children }: any) => {
    const data: LayoutProps = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
            }
        }
    }
    `)

    return (
        <div className='flex flex-col justify-center items-center py-2'>
            <header className='my-2 border px-2 text-2xl text-underline'> {data.site?.siteMetadata.title} </header>
            <nav>
                <ul className='flex gap-2'>
                    <li className='bg-blue-300 px-3 rounded hover:bg-blue-400'><Link to="/">Home</Link></li>
                    <li className='bg-green-300 px-3 rounded hover:bg-green-400'><Link to="/about">About</Link></li>
                    <li className='bg-yellow-300 px-3 rounded hover:bg-yellow-400'><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <main className='max-w-md text-center my-2'>
                <h1 className='text-xl font-bold my-2'>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout