import { Link } from "react-router-dom"
import styled from "styled-components"


const Header = styled.header `
  background-color: #6ebaff;
`

const Navigation = styled.nav `
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 150px;
`

const Logo = styled.h1 `
  padding: 5px 20px 5px 0;
  font-size: 40px;
`

const List = styled.ul `
  list-style-type: none;
  display: flex;
  flex-direction: none;

  li {
    margin: 0 5px;
    padding: 5px;
  }
`

const Nav = () => {
  return (
    <Header>
      <Navigation>
        <Logo><Link style={{ 
  textDecoration: "none" }} to="/">Extralab</Link></Logo>
        <List>
          <li><Link style={{ 
  textDecoration: "none" }} to="/">Home</Link></li>
          <li>Favorites</li>
        </List>
      </Navigation>
    </Header>

  )
}

export default Nav