import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle={"About My Gatsby Test"}>
          <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>About (my about)</title>
