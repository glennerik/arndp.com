import * as React from "react"
import { Heading, Text } from "@chakra-ui/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Arndp from "../components/Arndp"

const IndexPage = () => (
  <Layout>
    <Seo title="A Random Password Generator" />
    <Heading as="h1" my={8}>
      A Random Password Generator
    </Heading>
    <Arndp />

    <Text as="p" my={8}>
      Click on a password to copy it
    </Text>

    <Text as="p">
      All passwords are generated client side, aka. on your local device. They
      are not generated on our server, and they are not transferred over the
      network. No one but you (or anyone looking at your screen) are able to see
      these passwords.
    </Text>
  </Layout>
)

export default IndexPage
