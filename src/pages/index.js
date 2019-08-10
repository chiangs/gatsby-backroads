import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import HeroSimple from "../components/HeroSimple"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

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
      <About />
      <Services />
    </Layout>
  )
}
