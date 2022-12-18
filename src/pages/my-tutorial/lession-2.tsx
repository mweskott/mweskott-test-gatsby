import { HeadFC, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"

export default function Component () {
  return (
    <Layout pageTitle={"My Gatsby Tutorial - Lession 2"}>
        <div>Page content of lession.</div>
    </Layout>
  )
}

export const Head: HeadFC = () => (
    <>
        <title>tutotial - lession 2</title>
        <meta name="description" content="Gatsby Tutorial - Lession 2" />
    </>
)

