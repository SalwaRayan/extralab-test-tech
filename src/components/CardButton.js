import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #ffffff;
  padding:  10px 15px;
  margin-right: 10px;
  width: 130px;
  border-radius: 7px;
  border: solid 1px ${props => 
  props.text === "More" ? "#6ebaff" : "#ef5c0a"};
  color: aliceblue;
  background-color: ${(props) =>
  props.text === "More" ? "#6ebaff" : "#ef5c0a"};

  :hover {
    border: solid 1px ${props => 
    props.text === "More" ? "#123fe0" : "#ef5c0a"};
    background-color: ${props => 
      props.text === "More" ? "aliceblue" : "#ef5c0a"};
    color: ${props => 
      props.text === "More" ? "#123fe0" : "aliceblue"};
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