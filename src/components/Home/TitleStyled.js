import React from "react"
import styled from "styled-components"

const TitleStyled = ({ title, subtitle, className }) => {
  return (
    <section className={className}>
      <h4>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </h4>
    </section>
  )
}

export default styled(TitleStyled)`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
    @media (min-width: 576px) {
      span {
        display: inline-block;
        margin: 0 0.35rem;
      }
    }
  }
`

// *Alternate syntax
// const TitleWrapper = styled.section`
//   text-transform: uppercase;
//   font-size: 2.3rem;
//   margin-bottom: 2rem;
//   h4 {
//     text-align: center;
//     letter-spacing: 7px;
//     color: var(--primaryColor);
//   }
//   .title {
//     color: var(--mainBlack);
//   }
//   span {
//     display: block;
//     @media (min-width: 576px) {
//       span {
//         display: inline-block;
//         margin: 0 0.35rem;
//       }
//     }
//   }
// `

// export default TitleStyled
