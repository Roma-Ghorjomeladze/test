import styled from 'styled-components'
import Image from 'next/image'

export const Cover = ({ src, title }) => {
  return (
    <Outer>
      <Container>
        <Image
          layout="fill"
          objectFit="cover"
          src={src}
          objectPosition="bottom center"
        />
        <Page>{title}</Page>
      </Container>
    </Outer>
  )
}

let Container = styled.div`
  width: 100vw;
  min-height: 200px;
  margin: 0;
  padding: 0;
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
let Outer = styled.div`
  padding-top: 150px;
  @media (max-width: 768px) {
    padding-top: 0;
  }
`
