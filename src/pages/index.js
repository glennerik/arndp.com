import * as React from "react"
import {
  Heading,
  Text,
  Link,
  Stack,
  ListItem,
  OrderedList,
} from "@chakra-ui/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Arndp from "../components/Arndp"

const IndexPage = () => (
  <Layout>
    <Seo title="A Random Password Generator" />
    <Heading as="h1" fontSize="4xl" textAlign="center" mb={4}>
      A Random Password Generator
    </Heading>
    <Arndp />
    <Heading as="h2" fontSize="3xl" textAlign="center" mb={4}>
      👉 This app works offline 👈
    </Heading>
    <Stack spacing={4}>
      <Text>
        All passwords are generated client side &mdash; aka. on your local
        device. They are not generated on a server, and they are not transferred
        over the network. No one but you (or anyone looking at your screen) are
        able to see these passwords. Guard them as if your life depends on them,
        it just might!
      </Text>

      <Text>
        Arndp.com is both safe and anonymous. If you don't trust me and want to
        make sure the generated passwords are not stored anywhere, try
        disconnecting your device from the internet and regenerate the
        passwords.
      </Text>

      <Text>
        You can also disconnect your device from the internet/network and reload
        this page. The password generator will still work and you can be sure no
        information is being sent anywhere out from your device.
      </Text>

      <Text>
        For the super skeptical: Disconnect, regenerate, copy, then close the
        tab/browser and flush your browsers cache before reconnecting to the
        network. I really don’t want anyones passwords, having them only creates
        problems ;-) I want people to use this app; and for that to happen it
        must be trustworthy.
      </Text>

      <Text>
        Still not convinced? Good, I like that, you shoould be careful with your
        passwords. Check out the source code of arndp.com on{" "}
        <Link
          href="https://github.com/glennerik/arndp.com"
          textDecor="underline"
        >
          Github
        </Link>
        .
      </Text>

      <Text>
        A general security tip is to keep your passwords at least 16 characters
        long, include UPPERcase and lowercase letters, in addition to numbers.
        If you do, your password is considered to be a{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Password_strength"
          textDecor="underline"
        >
          strong password
        </Link>
        .
      </Text>
      <Text>
        If you want to make <i>super strong passwords</i> consider these
        additional steps:
        <OrderedList>
          <ListItem>Increase the size above 16 characters</ListItem>
          <ListItem>Add some non a-z characters</ListItem>
          <ListItem>Throw in a couple of spaces</ListItem>
        </OrderedList>
        This app makes super strong passwords by default. 💪
      </Text>
    </Stack>
  </Layout>
)

export default IndexPage
