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

    <Text as="p">
      Arndp.com is both safe and anonymous. If you don't trust us and want to
      make sure the generated passwords are not stored anywhere, try
      disconnecting your device from the internet and regenerate the passwords.
      <br />
      <br />
      You can also disconnect your device from the internet/network and reload
      this page. The password generator will still work and you can be sure no
      information is being sent anywhere out from your device.
      <br />
      <br />
      For the super skeptical: Disconnect, regenerate, copy, then close the
      tab/browser and flush your browsers cache before reconnecting to the
      network. We don’t want anyones passwords, we want people to use this site
      and for that to happen it needs to be trustworthy.
      <br />
      <br />
      Still not convinced? Good, I like that, you shoould be careful with your
      passwords. Check out the source code of arndp.com on{" "}
      <Link href="https://github.com/glennerik/arndp.com" textDecor="underline">
        Github
      </Link>
      .
    </Text>
  </Layout>
)

export default IndexPage
