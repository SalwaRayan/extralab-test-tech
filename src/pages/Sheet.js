import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BubbleInfo from '../components/BubbleInfo'

import { Container } from '../components/styledComponents/StyledPages'
import { Cover, Image, TitleBox, InfoBox, BackgroundImage, BgBlur, Plot } from '../components/styledComponents/StyledSheet'

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
      <BackgroundImage  image={info.Poster}> 
        <BgBlur />
      </BackgroundImage>
      <Container type="Sheet">
        <Cover>
          <Image src={info.Poster} width={200} />
          <TitleBox>
            <h2>{info.Title}</h2>
            <p><b>{info.Year}</b></p>          
          </TitleBox>
        </Cover>
        <div>
          <InfoBox>
            <BubbleInfo type={info.Type} released={info.Released} rated={info.Rated} runtime={info.Runtime} genre={info.Genre} language={info.Language} country={info.Country} />
            <BubbleInfo director={info.Director} writer={info.Writer} actors={info.Actors} production={info.Production} />
            <BubbleInfo ratings={info.Ratings} imdbRating={info.imdbRating} />
          </InfoBox>
          <InfoBox>
            <Plot><b>Plot:</b> {info.Plot}</Plot>
            <BubbleInfo awards={info.Awards} boxOffice={info.BoxOffice} />
          </InfoBox>
        </div>
      </Container>
    </>
  );
}

export default Sheet;