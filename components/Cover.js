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
  height: 160px;
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
  left: 135px;
  bottom: 40px;
  z-index: 2;
  color: #fff;
  font-size: 30px;
  line-height: 30px;
`
let Outer = styled.div`
  position: sticky;
`
