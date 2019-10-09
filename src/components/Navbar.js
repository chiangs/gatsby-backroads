import React, { useState } from "react"
import { Link } from "gatsby"
import css from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import Links from "../constants/routes"
import SocialIcons from "../constants/socialMedia"
import Logo from "../images/logo.svg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Project from "./Project"

const getIcon = graphql`
  query secIcon {
    secIcon: file(relativePath: { eq: "secIcon.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Navbar = () => {
  const { secIcon } = useStaticQuery(getIcon)

  const [openNav, setOpenNav] = useState(false)
  const onOpenNav = () => setOpenNav(prev => !prev)
  const onToggleAbout = () => console.log("toggling")

  const links = Links.map((item, i) => (
    <li key={i}>
      <Link to={item.path}>{item.displayValue}</Link>
    </li>
  ))
  const socialIcons = SocialIcons.map((item, i) => (
    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
      {item.icon}
    </a>
  ))
  const openNavStyles = openNav
    ? `${css.navLinks} ${css.showNav}`
    : `${css.navLinks}`

  return (
    <nav className={css.navbar}>
      <section className={css.navCenter}>
        <section className={css.navHeader}>
          <img src={Logo} alt="Backroads logo" />
          <button type="button" className={css.logoBtn} onClick={onOpenNav}>
            <FaAlignRight className={css.logoIcon} />
          </button>
          <section className={css.SecIcon} onClick={onToggleAbout}>
            <Img
              fluid={secIcon.childImageSharp.fluid}
              alt="sec link to main portfolio"
            />
          </section>
        </section>
        <ul className={openNavStyles}>{links}</ul>
        <section className={css.navSocialLinks}>{socialIcons}</section>
      </section>
      <Project closeHandler={onToggleAbout} />
    </nav>
  )
}

export default Navbar
