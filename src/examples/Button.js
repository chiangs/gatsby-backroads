import styled from "styled-components"

const green = "green"

const Button = styled.button`
  color: ${props => props.color};
  background: ${green};
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`
export default Button
