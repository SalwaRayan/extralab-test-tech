import { useEffect, useState } from 'react'

import Button from "./Button"

import { FilmCard, Header, Title, ImageBox, Plot, ButtonBox } from "./styledComponents/StyledCard"

const Card = (props) => {
  const { movie } = props
  // const [ infoMovie, setInfoMovie ] = useState()

  // const getMovies = async() => {
  //   const res = fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&i=${movie.imdbID}`)

  //   const data = await res

  //   setInfoMovie(data.json())
  //   console.log(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&i=${movie.imdbID}`)
  //   console.log("movies:", infoMovie)
  // }

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
      {/* <hr /> */}
      <ImageBox>
        <img src={movie.Poster} alt="I'm the cover" width={400} />
      </ImageBox>
      {/* <hr /> */}
      {/* <Plot>{movie.Plot}</Plot> */}
      <hr />
      <ButtonBox>
        <Button text="More" />
        <Button text="Add to Favorite" />
      </ButtonBox>
    </FilmCard>
  )
}

export default Card