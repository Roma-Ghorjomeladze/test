import styled from 'styled-components'

export const Cover = ({ src, title }) => {
  return (
    <Outer>
      <Container>
        <Image src={src} />
        <Page>{title}</Page>
      </Container>
    </Outer>
  )
}

let Container = styled.div`
  width: vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
`

let Image = styled.img`
  width: 100%;
  height: 100%;
`

let Page = styled.span`
  position: absolute;
  left: 110px;
  bottom: 40px;
  z-index: 2;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  max-width: 350px;
`
let Outer = styled.div`
  position: sticky;
`
