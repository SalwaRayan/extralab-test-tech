import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { Formik, Form, Field } from 'formik'

const Container = styled.section`
  margin: 0 150px;
`

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SearchBar = styled.input`

`

const Home = () => {
  const [ movies, setMovies ] = useState([])
  const [ film, setFilm ] = useState([
    {
    Title: "Titanic",
    Year: "1997",
    imdbID: "tt0120338",
    Poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
    Title: "Silence",
    Year: "2016",
    imdbID: "tt0490215",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjY3OTk0NjA2NV5BMl5BanBnXkFtZTgwNTg3Mjc2MDI@._V1_SX300.jpg",
    },
    {
    Title: "Nemo",
    Year: "1984",
    imdbID: "tt8654066",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGI5YTc5MjItY2UzZS00NDhjLWFjZTgtOTMzNzFiOTlmMTEzXkEyXkFqcGdeQXVyNTY4ODAxODI@._V1_SX300.jpg",
    }
  ])

  useEffect(() => {

  }, [movies])
    
  const getMovies = async(query) => {
    // const res = fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${query}`)
    fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${query}`)
    .then(result => result.json())
    .then(data => setMovies(data.Search))

    console.log(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${query}`)
  }

  return (
    <Container>
      <h2>Search</h2>
      <div>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={(values) => {
            const changedValue = values.query.replace(/[-\s]+/g, "+").replace(/^-/, '+').replace(/[^a-zA-Z0-9àç_èéù-]+/g, "+").toLowerCase() 
            getMovies(changedValue)
          }}
        >
          {formikProps => (
            <Form className="formulaire">
              <div className="query-input">
                <Field
                  name="query"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.query}
                />
              </div>
              <button 
                type="submit" 
                disabled={!formikProps.values.query}
              >
                Submit
              </button>
              <button
                type="reset"
                disabled={!formikProps.values.query}
                onClick={formikProps.resetForm}
              >X</button>
            </Form>
          )}
        </Formik>
      </div>

      <h3>Filter</h3>
      <MoviesContainer>
        {console.log(movies)}
        {movies.length > 0 ?
          movies.map((movie, index) => {
            return <Card key={index} movie={movie} />
          })
          :
          <></>
        }
        </MoviesContainer>
    </Container>
  )
}

export default Home