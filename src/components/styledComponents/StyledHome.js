import styled from "styled-components";

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Search = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-bottom: 10px;
  }
`

const Filter = styled.button `
  padding: 10px 15px;
  color: #ef5c0a;
  background-color: aliceblue;
  border: 2px solid #ef5c0a;
  border-radius: 10px;
  margin: 10px 5px;
`

const ButtonBox = styled.div `
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const ButtonPage = styled.button `
  margin: 5px 15px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid #123fe0;
  color: #123fe0;
  background-color: aliceblue;
`

export {
  MoviesContainer,
  Search,
  Filter,
  ButtonBox,
  ButtonPage
}