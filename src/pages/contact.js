import React from 'react'
import { Link } from 'gatsby'
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact Me!" />
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </div>
  )
}