/**
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Link, Button, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { useGetThemeColor } from "./ThemeProvider"

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

  const { colorMode, toggleColorMode } = useColorMode()
  const { themeColor } = useGetThemeColor()

  return (
    <>
      <Box as="header" bg={themeColor}>
        <Flex
          maxW={960}
          m="0 auto"
          p={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" color="white">
            {data.site.siteMetadata?.title || `arndp.com`}
          </Link>
          <Button
            onClick={toggleColorMode}
            variant="link"
            color="yellow.200"
            p={2}
          >
            {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Flex>
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
