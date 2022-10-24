import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { Container } from '../components/styledComponents/StyledPages'

const Cover = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Sheet = () => {
  const { imdbID } = useParams()
  const [ info, setInfo ] = useState()

  useEffect(() => {
    getInfo()
  }, [imdbID])

  const getInfo = async() => {
    fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&i=${imdbID}&plot=full`)
    .then(result => result.json())
    .then(data => setInfo(data))
  }
  
  if (!info) {
    return <p>Loading...</p>
  }

  return (
    <>
      {console.log(info)}
      <Container>
        <Cover>
          <img src={info.Poster} width={200} />
          <div>
            <h2>{info.Title}</h2>
            <p>{info.Year}</p>
          </div>
        </Cover>
      </Container>
      <Container>
        <div>
          <div></div>
          <div></div>
        </div>
        <p>{info.Plot}</p>
      </Container>
    </>
  );
}

export default Sheet;