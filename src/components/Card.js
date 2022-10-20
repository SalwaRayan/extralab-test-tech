import Button from "./Button"

import { FilmCard, Header, Title, ImageBox, Plot, ButtonBox } from "./styledComponents/StyledCard"

const Card = (props) => {
  const { movie } = props

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
      <Plot>{movie.Plot}</Plot>
      <hr />
      <ButtonBox>
        <Button text="More" />
        <Button text="Add to Favorite" />
      </ButtonBox>
    </FilmCard>
  )
}

export default Card