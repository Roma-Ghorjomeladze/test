import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import Meta from './Meta'
import {Cover} from './Cover'

export default function Wrapper(props) {
  return (
    <Container>
      <Meta siteTitle={props.title} siteDescription="" />
      <Header data={props.data} />
      {props.displayCover !== false && (
        <Cover
          src={props.data?.frontmatter.image}
          title={props.data?.frontmatter.title}
        />
      )}
      <Main>{props.children}</Main>
      <Footer />
    </Container>
  )
}

let Main = styled.div`
  background-color: #fff5f5;
  padding: 0 100px;
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 1080px) {
    padding: 0 10px;
  }
`

let Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #fff5f5;
`
