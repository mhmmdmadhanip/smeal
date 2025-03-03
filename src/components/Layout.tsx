import React from 'react'
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
    <>
    <Navbar />
    <main className="w-full overflow-x-hidden">{children}</main>
    </>
    )
}

export default Layout