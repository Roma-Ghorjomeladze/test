import ProfileHeader from './ProfileHeader'
import Footer from './Footer'
import styled from 'styled-components'
import Meta from './Meta'

export default function ProfileWrapper(props) {
  return (
    <Container>
      <Meta siteTitle={props.data?.frontmatter.title} siteDescription="" />
      <ProfileHeader data={props.data} />
      <Main>{props.children}</Main>
      <Footer />
    </Container>
  )
}

let Main = styled.div`
  background-color: #fff5f5;
  padding: 0 110px;
  overflow: hidden;
  @media (max-width: 1080px) {
    padding: 0 10px;
  }
`

let Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`
