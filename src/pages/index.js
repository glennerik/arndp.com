import * as React from "react"
import { Heading, Text, Link } from "@chakra-ui/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Arndp from "../components/Arndp"

const IndexPage = () => (
  <Layout>
    <Seo title="A Random Password Generator" />
    <Heading as="h1">A Random Password Generator</Heading>
    <Arndp />

    <Text as="p" my={8}>
      Click on a password to copy it 😎
    </Text>

    <Text as="p" my={8}>
      As long as the password you choose is at least 16 characters long. And it
      contains uppercase and lowercase letters, in addition to numbers &mdash;
      it is considered a{" "}
      <Link
        href="https://en.wikipedia.org/wiki/Password_strength"
        textDecor="underline"
      >
        strong password
      </Link>
      . Throw in a couple of spaces and some other characters as well and it is{" "}
      <i>super strong</i>.
    </Text>

    <Text as="p">
      All passwords are generated client side &mdash; aka. on your local device.
      They are not generated on our server, and they are not transferred over
      the network. No one but you (or anyone looking at your screen) are able to
      see these passwords. Guard them as if your life depends on them, it just
      might!
    </Text>
  </Layout>
)

export default IndexPage
