import { useEffect, useState } from 'react'

import Button from "./Button"

import { FilmCard, Header, Title, ImageBox, Plot, ButtonBox } from "./styledComponents/StyledCard"

const Card = (props) => {
  const { movie } = props
  const [ infoMovie, setInfoMovie ] = useState()

  useEffect(() => {
    getMovie()
  }, [movie])

  const getMovie = async() => {
    fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&i=${movie.imdbID}`)
    .then(result => result.json())
    .then(data => setInfoMovie(data))
  }

  if(!infoMovie) {
    return (
      <FilmCard>
      <Header>
        {movie.Title.length > 24 ? 
          <Title>{movie.Title.substring(0, 21)}...</Title>
          :
          <Title>{movie.Title}</Title>
        }
        <Title>{movie.Year}</Title>
      </Header>
      <ImageBox>
        <img src={movie.Poster} alt="I'm the cover" width={400} />
      </ImageBox>
      <hr />
      <ButtonBox>
        <Button text="More" />
        <Button text="Add to Favorite" />
      </ButtonBox>
    </FilmCard>
    )
  }

  return (
    <FilmCard>
      <Header>
        {movie.Title.length > 24 ? 
          <Title>{infoMovie.Title.substring(0, 21)}...</Title>
          :
          <Title>{infoMovie.Title}</Title>
        }
        <Title>{infoMovie.Year}</Title>
      </Header>
      {/* <hr /> */}
      <ImageBox>
        <img src={infoMovie.Poster} alt="I'm the cover" width={400} />
      </ImageBox>
      {/* <hr /> */}
      {console.log("movie", infoMovie)}
      <Plot>{infoMovie.Plot}</Plot>
      <hr />
      <ButtonBox>
        <Button text="More" />
        <Button text="Add to Favorite" />
      </ButtonBox>
    </FilmCard>
  )
}

export default Card