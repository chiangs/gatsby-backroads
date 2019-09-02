import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData)

  return (
    <div>
      <h1>title: {siteMetadata.title}</h1>
      <h2>author: {siteMetadata.author}</h2>
    </div>
  )
}

export default Header
