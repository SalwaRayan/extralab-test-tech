import styled from "styled-components"

const StyledButton = styled.button`
  background-color: #ffffff;
  padding:  5px 10px;
  margin-right: 10px;
  border: solid black 1px;
  border-radius: 7px;
`

const Button = (props) => {
  const { text } = props
  
  return (
    <StyledButton>
      {text === "More" ? "More" : "Add to favorites"}
    </StyledButton>
  )
}

export default Button