import styled from 'styled-components'
import Image from 'next/image'

export const Cover = ({ src, title }) => {
  return (
    <>
      <Div></Div>
      <Container>
        <Image
          layout="fill"
          objectFit="cover"
          src={src}
          objectPosition="bottom center"
          alt={title}
        />
        <TitleCont>
          <Page>{title}</Page>
        </TitleCont>
      </Container>
    </>
  )
}

let Div = styled.div`
  height: 166px;
  @media (max-width: 768px) {
    height: 0;
  }
`

let TitleCont = styled.div`
  width: 1440px;
  background-color: green;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  left: 100px;
  @media (max-width: 1080px) {
    left: 0;
  }
`

// let Image = styled.img`
//   height: 100%;
//   width: 100%;
// `

let Container = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 1080px) {
    height: 150px;
  }
  @media (max-width: 768px) {
    height: 100px;
  }
`

let Page = styled.span`
  letter-spacing: 0.05em;
  color: #fff5f5;
  text-shadow: 0px 2px 16px #000000;
  position: absolute;
  font-family: 'SanaRegular';
  bottom: -170px;
  z-index: 0;
  font-size: 30px;
  line-height: 30px;
  max-width: 422px;
  text-shadow: 0px 2px 16px #000000;
  @media (max-width: 1080px) {
    font-size: 22px;
    line-height: 22px;
    bottom: unset;
    margin-top: 100px;
    margin-left: 15px;
    margin-top: 100px;
  }
  @media (max-width: 768px) {
    min-height: 17px;
    margin-top: 70px;
  }
`
