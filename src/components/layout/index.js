import React from 'react'
import PropTypes from 'prop-types'

import SEO from '../seo'
import './index.css'

const Layout = ({ title, children }) => (
  <>
    <SEO title={title} />
    <main>{children}</main>
    <footer>
      jbonigomes.com © {new Date().getFullYear()}, Built with {``}
      <a target='__blank' href='https://www.gatsbyjs.org'>Gatsby</a>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
