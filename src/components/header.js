import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

import Wrapper from "./wrapper"

const Header = styled.header``

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default ({ siteTitle }) => (
  <Header>
    <Wrapper>
      <Link to="/">{siteTitle}</Link>
    </Wrapper>
  </Header>
)
