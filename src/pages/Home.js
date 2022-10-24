import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { Formik, Form, Field } from 'formik'

import { Container } from '../components/styledComponents/StyledPages'

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

const Home = () => {
  const [ list, setList ] = useState([])
  const [ error, setError ] = useState()
  const [ filter, setFilter ] = useState()
  const [ search, setSearch ] = useState()

  useEffect(() => {
  }, [list, error, filter])
    
  const getMovies = async(query, filter) => {
    let link = ""
    if (!filter) {
      link = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${query}`
    } else {
      link = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${query}&type=${filter}`
    }

    fetch(link)
    .then(result => result.json())
    .then(data => {
      if(data.Response == "False") {
        return setError(data.Error)
      } else {
        setList(data.Search)
        setError(null)
      }
      setSearch(query)
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
            getMovies(changedValue, filter)
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

      <Search>
        <h3>Filter</h3>
        <div>
          <Filter onClick={() => {if (filter !== "movie") {setFilter("movie")} else {setFilter(null)} getMovies(search, filter)}}>Movie</Filter>
          <Filter onClick={() => {if (filter !== "serie") {setFilter("serie")} else {setFilter(null)} getMovies(search, filter)}}>TV Show</Filter>
        </div>
      </Search>
      
      <MoviesContainer>
        {error ?
          <p>Movie or Serie not found</p>
          :
          list.map((movie, index) => {
            return <Card key={index} movie={movie} />
          })
        }
        </MoviesContainer>
    </Container>
  )
}

export default Home