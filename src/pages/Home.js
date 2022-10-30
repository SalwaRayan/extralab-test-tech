import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { Formik, Form, Field } from 'formik'

import { Container } from '../components/styledComponents/StyledPages'
import { MoviesContainer, Search, Filter, ButtonBox, ButtonPage } from '../components/styledComponents/StyledHome'

const Home = () => {
  const [ list, setList ] = useState([])
  const [ error, setError ] = useState()
  const [ filter, setFilter ] = useState()
  const [ page, setPage ] = useState(1)
  const [ query, setQuery ] = useState()

  useEffect(() => {
  }, [list, error, filter, page])
    
  const getMovies = async(query, filter, page) => {
    let link = ""
    if (!filter) {
      link = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${query}&page=${page}`
    } else {
      link = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&s=${query}&type=${filter}&page=${page}`
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
    })
  }

  const handleClickPage = (math) => {
    let calcul = ""
    
    if (math == "+") {
      calcul = page + 1
    } else if (math == "-") {
      calcul = page - 1
    }

    setPage(calcul) 
    getMovies(query, filter, calcul)
  }

  const handleFilter = (type) => {
    let fltr = type
    if (filter === type) {
      fltr = null
      setFilter(null)
    } else {
      fltr = type
      setFilter(type)
    }

    getMovies(query, fltr, page); 
    setPage(1)
  }

  return (
    <Container page="Home">
      <Search>
        <h2>Search</h2>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={(values) => {
            const changedValue = values.query.replace(/[-\s]+/g, "+").replace(/^-/, '+').replace(/[^a-zA-Z0-9àç_èéù-]+/g, "+").toLowerCase() 
            setPage(1)
            setQuery(changedValue)
            getMovies(changedValue, filter, page)
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
          <Filter onClick={() => handleFilter("movie")}>Movie</Filter>
          <Filter onClick={() => handleFilter("serie")}>TV Show</Filter>
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
        {list.length > 0 ? 
        <ButtonBox>
          <ButtonPage onClick={() => handleClickPage("-")} disabled={page == 1 ? true : false}>Precedent</ButtonPage>
          <p style={{ color: "#ef5c0a", fontWeight: "bold" }}>{page}</p>
          <ButtonPage onClick={() => handleClickPage("+")}>Next</ButtonPage>
        </ButtonBox>
        :
        <></>
        }
    </Container>
  )
}

export default Home