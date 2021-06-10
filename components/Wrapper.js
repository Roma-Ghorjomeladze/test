import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

export default function Wrapper(props) {
  return (
    <Container>
      <Header data={props.data} />

      <Main>{props.children}</Main>
      <Footer />
    </Container>
  )
}

let Main = styled.div`
  background-color: #fff5f5;
  padding: 0 110px;
  overflow: hidden;
`

let Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`
