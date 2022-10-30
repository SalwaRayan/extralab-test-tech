import styled from 'styled-components'

const Cover = styled.div `
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: absolute;
  top: 80px;
  `

const BackgroundImage = styled.div `
  background-image: ${(props) => props.image ? `url(${props.image})` : "none"};
  height: 350px;
  width: 100%;
  background-position: center;
  background-size: cover;
`

const BgBlur = styled.div `
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  height: 100%;
  width: 100%;
`

const Image = styled.img `
  border-radius: 15px;
`

const TitleBox = styled.div `
  margin-left: 20px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  padding: 5px 10px;
`

const InfoBox = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Plot = styled.p `
  text-align: justify;
  margin-right: 15px;
  margin-top: 15px;
`

export {
  Cover, 
  Image,
  TitleBox,
  InfoBox,
  BackgroundImage,
  BgBlur,
  Plot
}