import * as React from "react"
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <main>
      <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <h1>Welcome to Gatsby!</h1>
        <p>Continue... a happy learning with gatsby!!!</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </main >
  )
}

export default IndexPage
