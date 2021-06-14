import styled from 'styled-components'

export const Slide = ({ slide }) => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `
  const LeftImage = styled.div`
    width: 380px;
    height: 240px;
    background-image: url(${slide.image_left});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const MidImage = styled.div`
    width: 380px;
    height: 240px;
    background-image: url(${slide.image_mid});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const RightImage = styled.div`
    width: 380px;
    height: 240px;
    background-image: url(${slide.image_right});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const Title = styled.span`
    font-size: 27px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #fff5f5;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `

  return (
    <Container>
      <LeftImage>
        <Title>{slide.title_left}</Title>
      </LeftImage>
      <MidImage>
        <Title>{slide.title_mid}</Title>
      </MidImage>
      <RightImage>
        <Title>{slide.title_right}</Title>
      </RightImage>
    </Container>
  )
}
