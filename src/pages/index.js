import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Arndp from "../components/Arndp"

const IndexPage = () => (
  <Layout>
    <Seo title="A Random Password Generator" />
    <h1>A Random Password</h1>
    <p>Click on a password to copy it</p>
    <Arndp />
    <hr />
    All passwords are generated client side, aka. on your local device. They are
    not generated on our server, and they are not transferred over the network.
    No one but you (or anyone looking at your screen) are able to see these
    passwords.
  </Layout>
)

export default IndexPage
