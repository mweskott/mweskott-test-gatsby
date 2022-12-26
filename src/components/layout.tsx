import * as React from "react"
import { Link, HeadFC, PageProps, useStaticQuery, graphql } from "gatsby"
import { container, heading, navLinks, navLinkItem, navLinkText, siteTitle, main } from './layout.module.css'



const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)


    return (
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About Page</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/my-tutorial/lession-2" className={navLinkText}>My Tutorial - Lession 2/3/4</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog/" className={navLinkText}>Blog Page</Link>
                    </li>
                    <li className={navLinkItem}>
                        <a href="/___graphql" target="query" className={navLinkText}>Query</a>
                    </li>
                </ul>
            </nav>
            <main className={main}>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout