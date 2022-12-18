import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About Page</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/my-tutorial/lession-2" className={navLinkText}>My Tutorial - Lession 2</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout