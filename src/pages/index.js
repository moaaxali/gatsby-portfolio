import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <div style={{ color: `purple` }}>
          <Link to="/contact/">Contact</Link>
          <h1>Welcome to Gatsby!</h1>
          <p>Continue... a happy learning with gatsby!!!</p>
          <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
      </main >
    </Layout>
  )
}

export default IndexPage
