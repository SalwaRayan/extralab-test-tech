import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #ffffff;
  padding:  5px 10px;
  margin-right: 10px;
  border-radius: 7px;
  border: solid #123fe0 1px;
  border: solid 1px ${props => 
  props.text === "More" ? "#123fe0" : "#ef5c0a"};
  color: ${(props) =>
  props.text === "More" ? "#123fe0" : "aliceblue"};
  background-color: ${(props) =>
  props.text === "More" ? "aliceblue" : "#ef5c0a"};

  :hover {
    background-color: ${props => 
      props.text === "More" ? "#123fe0" : "#ef5c0a"};
    color: ${props => 
      props.text === "More" ? "aliceblue" : "#aliceblue"};
  }
`

const Button = (props) => {
  const { text } = props
  
  return (
    <StyledButton text={text}>
      {text === "More" ? "More" : "Add to favorites"}
    </StyledButton>
  )
}

export default Button