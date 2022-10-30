import styled from "styled-components";

const Container = styled.div `
  background-color: #6ebaff;
  min-width: 350px;
  width: fit-content;
  max-width: 400px;
  padding: 15px;
  margin-top: 15px;
  border-radius: 15px;
  height: fit-content;
  min-height: 150px;
`

const BubbleInfo = (promps) => {
  const { type, released, rated, runtime, genre, language, country, production, director, writer, actors, ratings, imdbRating, awards, boxOffice } = promps

  return (
    <Container>
      {type ? <p><b>Type</b>: {type}</p> : <></>}
      {released ? <p><b>Released</b>: {released}</p> : <></>}
      {rated ? <p><b>Rated</b>: {rated}</p> : <></>}
      {runtime ? <p><b>Runtime</b>: {runtime}</p> : <></>}
      {genre ? <p><b>Genre{`(s)`}</b>: {genre}</p> : <></>}
      {director ? <p><b>Director{`(s)`}</b>: {director}</p> : <></>}
      {country ? <p><b>Country{`(es)`}</b>: {country}</p> : <></>}
      {language ? <p><b>Language{`(s)`}</b>: {language}</p> : <></>}
      {writer ? <p><b>Writer{`(s)`}</b>: {writer}</p> : <></>}
      {actors ? <p><b>Actors</b>: {actors}</p> : <></>}
      {production ? <p><b>Production</b>: {production}</p> : <></>}
      {ratings ? 
          ratings.map((rating, index) =>
            <p key={index}><b>{rating.Source}</b>: {rating.Value}</p>
          ) 
        : 
          <></>
      }
      {imdbRating ? <p><b>IMDb Rating</b>: {imdbRating}/10</p> : <></>}
      {awards ? <p><b>Awards</b>: {awards}</p> : <></>}
      {boxOffice ? <p><b>BoxOffice</b>: {boxOffice}</p> : <></>}
    </Container>
  );
};

export default BubbleInfo;