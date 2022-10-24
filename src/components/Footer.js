import styled from "styled-components";

const Foot = styled.footer `
  background-color: #000f3c;
  padding: 0 150px;
  margin-top: 20px;
  `

const Logo = styled.p `
  color: aliceblue;
  font-size: 25px;
  font-weight: bold;
`

const Footer = () => {
  return (
    <Foot>
      <Logo>Extralab</Logo>
    </Foot>
  )
}

export default Footer