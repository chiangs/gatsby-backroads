import React from "react"
import css from "../css/project.module.css"

const Project = ({ closeHandler }) => {
  const title = `About this project`
  const purpose = `Exercise the capabilities of the GatsbyJS platform as a static site generator and consume a headless CMS for content via GraphQL.`
  const tech = [`GatsbyJS`, `GraphQL`, `React`, `Contenful`, `Netlify`]
  const linkText = `Go back to main site`
  const mainSiteLink = `https://chiangs.dev`
  const techUI = tech.map(item => (
    <li key={item} className={css.Tech__Item}>
      {item}
    </li>
  ))

  return (
    <aside className={css.Project}>
      <section className={css.Project__About}>
        <h3>{title}</h3>
        <p>{purpose}</p>
        <a href={mainSiteLink} rel="nofollow noopener">
          {linkText}
        </a>
      </section>
      <section className={css.Project__Tech}>
        <ul className={css.Tech__List}>{techUI}</ul>
      </section>
      <button className={css.CloseButton} type="button" onClick={closeHandler}>
        X
      </button>
    </aside>
  )
}

export default Project
