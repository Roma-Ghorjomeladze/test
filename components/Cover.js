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
        <Page>{title}</Page>
      </Container>
    </>
  )
}
let Div = styled.div`
  height: 166px;
`
let Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 200px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 1080px) {
    min-height: 150px;
  }
  @media (max-width: 768px) {
    min-height: 100px;
  }
`

let Page = styled.span`
  position: absolute;
  left: 110px;
  bottom: 40px;
  z-index: 2;
  color: #fff;
  font-size: 30px;
  line-height: 30px;
  max-width: 422px;
  @media (max-width: 1080px) {
    font-size: 22px;
    line-height: 22px;
    left: 80px;
    bottom: 30px;
  }
  @media (max-width: 768px) {
    min-height: 17px;
    left: 50px;
    bottom: 20px;
  }
`
