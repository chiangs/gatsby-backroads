import React from "react"
import { Link } from "gatsby"
import css from "../css/footer.module.css"
import Links from "../constants/routes"
import SocialIcons from "../constants/socialMedia"

const Footer = () => {
  const copyrightText = `copyright © backroads travel company ${new Date().getFullYear()}`
  const links = Links.map((item, i) => (
    <Link key={i} to={item.path}>
      {item.displayValue}
    </Link>
  ))
  const icons = SocialIcons.map((item, i) => (
    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
      {item.icon}
    </a>
  ))
  return (
    <footer className={css.footer}>
      <section className={css.links}>{links}</section>
      <section className={css.icons}>{icons}</section>
      <section className={css.copyright}>{copyrightText}</section>
    </footer>
  )
}

export default Footer
