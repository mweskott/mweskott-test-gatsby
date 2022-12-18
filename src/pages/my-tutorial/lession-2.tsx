import { HeadFC, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function Component () {
  return (
    <Layout pageTitle={"My Gatsby Tutorial - Lession 2"}>
        <div>Page content of lession.</div>
        <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />        
        <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="../../images/dog.webp"
        />        
    </Layout>
  )
}

export const Head: HeadFC = () => (
    <>
        <Seo title={"tutotial - lession 2"} />
        <meta name="description" content="Gatsby Tutorial - Lession 2" />
    </>
)

