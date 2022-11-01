import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }: any) => {
    return (
        <div className='flex flex-col justify-center items-center py-2'>
            <nav>
                <ul className='flex gap-2'>
                    <li className='bg-blue-300 px-3 rounded hover:bg-blue-400'><Link to="/">Home</Link></li>
                    <li className='bg-green-300 px-3 rounded hover:bg-green-400'><Link to="/about">About</Link></li>
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