import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import Counter from "../components/Counter"
import BlogSilder from "../components/BlogSilder"
import Service from "../components/Service"
import Support from "../components/Support"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner/>
    <Counter/>
    <BlogSilder/>
    <Service/>
    <Support/>
    <About/> 
  </Layout>
)

export default IndexPage
