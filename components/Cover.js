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
  min-height: 350px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
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
let Outer = styled.div``
