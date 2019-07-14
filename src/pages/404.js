import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import css from "../css/error.module.css"
import Banner from "../components/Banner"

const errorPage = () => {
  const title = "Oops! It's a dead end!"
  const info = ""
  return (
    <Layout>
      <article className={css.error}>
        <Banner title={title} info={info}>
          <Link className="btn-white" to="/">
            Back to homepage
          </Link>
        </Banner>
      </article>
    </Layout>
  )
}

export default errorPage
