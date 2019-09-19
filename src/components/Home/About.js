import React from "react"
import TitleStyled from "./TitleStyled"
import css from "../../css/about.module.css"
import img from "../../images/blogBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={css.about}>
      <TitleStyled title="About" subtitle="Us" />
      <div className={css.aboutCenter}>
        <article className={css.aboutImg}>
          <div className={css.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className={css.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tenetur
            cum possimus ipsum doloribus laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et tenetur
            cum possimus ipsum doloribus laudantium.
          </p>
          <button type="button" className="btn-primary">
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
