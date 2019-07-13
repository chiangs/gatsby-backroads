import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import HeroSimple from "../components/HeroSimple"
import Banner from "../components/Banner"

export default () => {
  const title = "Continue exploring"
  const info = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  return (
    <Layout>
      <HeroSimple>
        <Banner title={title} info={info}>
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </HeroSimple>
    </Layout>
  )
}
