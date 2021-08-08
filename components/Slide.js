import styled from 'styled-components'
import Link from 'next/link'

export const Slide = ({ slide }) => {
  return (
    <Container>
      <P>Meine Spezialgebiete</P>
      <Images>
        <ImageCont key={1}>
          <Image src="/static/slide/slide1.png" />
          <Title>
            <Link href="/angebot/craniosacral-therapie/schwangerschaft">
              <a>Schwangerschaft</a>
            </Link>
          </Title>
        </ImageCont>
        <ImageCont key={2}>
          <Image src="/static/slide/slide2.png" />
          <Title>
            <Link href="/angebot/craniosacral-therapie/nach-der-geburt">
              <a>Nach der Geburt</a>
            </Link>
          </Title>
        </ImageCont>
        <ImageCont key={3}>
          <Image src="/static/slide/slide3.png" />
          <Title>
            <Link href="/angebot/craniosacral-therapie/kinder-und-familien">
              <a>Kinder und Familien</a>
            </Link>
          </Title>
        </ImageCont>
      </Images>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 100px;
`
const ImageCont = styled.div`
  position: relative;
  width: 380px;
  height: 237px;
  @media (max-width: 1370px) {
    width: 300px;
    height: 190px;
  }
  @media (max-width: 1120px) {
    width: 240px;
    height: 150px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 380px;
    height: 237px;
    margin-bottom: 20px;
  }
`
const Image = styled.img``
const Title = styled.span`
  position: absolute;
  cursor: pointer;
  transform: translateX(-50%);
  left: 50%;
  top: 50%;
  font-size: 27px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  white-space: nowrap;
  @media (max-width: 1370px) {
    font-size: 25px;
  }
  @media (max-width: 1120px) {
    font-size: 23px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const Images = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const P = styled.p`
  font-size: 27px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: #000000;
  margin-bottom: 45px;
  @media (max-width: 1080px) {
    font-size: 20px;
    letter-spacing: 0.8px;
  }
`
