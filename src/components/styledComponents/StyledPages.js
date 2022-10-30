import styled from "styled-components"

const Container = styled.section`
  margin: 0 150px;
  min-height: ${props => props.page == "Home" ? "calc(100vh - 136px)" : "calc(100vh - 447px)"};
  margin-bottom: ${props => props.page == "Home" ? "0" : "40px"};
`

export {
  Container
}