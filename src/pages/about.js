import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"


export default function About() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="About Me!" />
        <p>A software engineer, a cyber security and cloud enthusiast, and a tech lover.</p>
      </div>
    </Layout>
  )
}