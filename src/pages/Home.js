import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { Header } from '../components/styledComponents/StyledCard'

const Container = styled.section`
  margin: 0 150px;
`

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Home = () => {
  const [ movies, setMovies ] = useState()
  const [ movie, setMovie ] = useState({
    Title: "Titanic",
    Year: "1997",
    Plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    Poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  })

  useEffect(() => {
    getMovies()
  }, [])

  const getMovies = async() => {
    const res = fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&t=titanic`, {
      redirect: 'follow'
    })

    console.log("json(): ", (await res).json())
    const data = (await res).json()
    console.log("response: ", data)
    // setMovie(data)
    
    // setMovies(data)
  }


  return (
    <Container>
      <h2>Search</h2>
      <h3>Filter</h3>
      <MoviesContainer>
        <Card movie={movie} />
        <Card movie={movie} />
        <Card movie={movie} />
        <Card movie={movie} />
        <Card movie={movie} />
        {/* {movies.map((movie, index) => {
          <Card key={index} movie={movie} />
        })} */}
      </MoviesContainer>
    </Container>
  )
}

export default Home