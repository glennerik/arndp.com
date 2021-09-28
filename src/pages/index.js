import * as React from "react"
import { Heading, Text } from "@chakra-ui/react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Arndp from "../components/Arndp"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <link rel="canonical" href="https://www.arndp.com/" />
    </Helmet>
    <Seo title="A Random Password Generator" />
    <Heading as="h1">A Random Password Generator</Heading>
    <Text as="p">Click on a password to copy it</Text>
    <Arndp />
    <Text as="p">
      All passwords are generated client side, aka. on your local device. They
      are not generated on our server, and they are not transferred over the
      network. No one but you (or anyone looking at your screen) are able to see
      these passwords.
    </Text>
  </Layout>
)

export default IndexPage
