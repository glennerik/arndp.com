/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Link } from "@chakra-ui/react"

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
      <Box as="header" bg="purple">
        <Box maxW={960} m="0 auto" p={4}>
          <Link href="/">{data.site.siteMetadata?.title || `arndp.com`}</Link>
        </Box>
      </Box>
      <Box m="0 auto" maxW={960} p={4}>
        <main>{children}</main>
        <Box as="footer" mt={8}>
          © {new Date().getFullYear()},{` `}
          <a href="https://www.arndp.com">arndp.com</a>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
