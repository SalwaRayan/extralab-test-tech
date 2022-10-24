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

const Search = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-bottom: 10px;
  }
`

const Home = () => {
  const [ movies, setMovies ] = useState([])
  const [ error, setError ] = useState()

  useEffect(() => {

  }, [movies, error])
    
  const getMovies = async(query) => {
    fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${query}`)
    .then(result => result.json())
    .then(data => {
      if(data.Response == "False") {
        return setError(data.Error)
      } else {
        setMovies(data.Search)
        setError(null)
      }
    })
  }

  return (
    <Container>
      <Search>
        <h2>Search</h2>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={(values) => {
            const changedValue = values.query.replace(/[-\s]+/g, "+").replace(/^-/, '+').replace(/[^a-zA-Z0-9àç_èéù-]+/g, "+").toLowerCase() 
            getMovies(changedValue)
          }}
        >
          {formikProps => (
            <Form className="formulaire">
              <div>
                <Field
                  name="query"
                  className="query-input"
                  onChange={formikProps.handleChange}
                  value={formikProps.values.query}
                />
              </div>
              <button 
                type="submit"
                className='submit' 
                disabled={!formikProps.values.query}
              >
                Submit
              </button>
              <button
                type="reset"
                className='reset'
                disabled={!formikProps.values.query}
                onClick={formikProps.resetForm}
              >X</button>
            </Form>
          )}
        </Formik>
      </Search>

      <h3>Filter</h3>
      <MoviesContainer>
        {error ?
          <p>Movie not found</p>
          :
          movies.map((movie, index) => {
            return <Card key={index} movie={movie} />
          })
        }
        </MoviesContainer>
    </Container>
  )
}

export default Home