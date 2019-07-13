import React, { useState } from "react"
import { Link } from "gatsby"
import css from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import Links from "../constants/routes"
import SocialIcons from "../constants/socialMedia"
import Logo from "../images/logo.svg"

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  const onOpenNav = () => setOpenNav(prev => !prev)
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
        </section>
        <ul className={openNavStyles}>{links}</ul>
        <section className={css.navSocialLinks}>{socialIcons}</section>
      </section>
    </nav>
  )
}

export default Navbar
