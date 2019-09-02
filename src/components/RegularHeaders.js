import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
const RegularHeaders = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={res => {
        const data = res.site.siteMetadata
        return (
          <div>
            <h1>{data.title}</h1>
            <h2>{data.author}</h2>
          </div>
        )
      }}
    ></StaticQuery>
  )
}

export default RegularHeaders
