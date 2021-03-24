/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import NavTop from "./NavTop"
import '../styles/style.scss'
import Menu from "./Menu"
import Footer from "./Footer"
import SupportCountry from "./Card/SupportCountry"
import comodo_icon from "../images/sectigo_trust_seal_sm_2x.png"
const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
    <header className="header">
      <NavTop/>
      <Menu/>
    </header>
      {children}
      <Footer/>
      <div id="comodo-icon">
        <a href="https://secure.trust-provider.com/ttb_searcher/trustlogo?v_querytype=W&amp;v_shortname=SECEV&amp;v_search=https://bbcincorp.com/&amp;x=6&amp;y=5" target="_blank" rel="nofollow">
          <img src={comodo_icon}/>
          </a>
        </div>
    </>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
