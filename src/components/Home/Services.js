import React from "react"
import TitleStyled from "./TitleStyled"
import styles from "../../css/services.module.css"
import services from "../../constants/services"

const Services = () => {
  return (
    <section className={styles.services}>
      <TitleStyled title="our" subtitle="services" />
      <div classNam={styles.center}>
        {services.map((service, i) => (
          <article key={`${service.title}${i}`} className={styles.service}>
            <span>{service.icon}</span>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
