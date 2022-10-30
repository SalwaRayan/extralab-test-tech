import styled from "styled-components"

const FilmCard = styled.div`
  margin: 10px 19.2px;
  padding: 5px 7px;
  width: 350px;
  border: solid 2px black;
  border-radius: 10px;
  align-content: space-between;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.p`
  font-weight: 600;
  padding-bottom: 5px;
  font-size: 25px;
`

const ImageBox = styled.div`
  width: auto;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Plot = styled.p`
  margin: 10px 0;
  text-align: justify;
  height: 130px;
`

const ButtonBox = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: center;
`

export {
  FilmCard,
  Header,
  Title,
  ImageBox,
  Plot,
  ButtonBox
}