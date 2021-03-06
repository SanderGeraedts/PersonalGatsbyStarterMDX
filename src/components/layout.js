/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import Navigation from "./navigation"
import Wrapper from "./wrapper"
import "./layout.css"

const Main = styled.main`
  margin-bottom: 100px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Navigation />
      <Wrapper>
        <Main>{children}</Main>
        <footer>{/* TODO: Footer */}</footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
