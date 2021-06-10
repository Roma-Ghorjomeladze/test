import styled from 'styled-components'
import { Article } from './Article'
export const HomePost = ({ article, isLink }) => {
  return (
    <Container>
      {article.order == true && (
        <ImgCont>
          <Image src={article.image} />
        </ImgCont>
      )}
      <ArticleCont>
        <Article isLink={!!isLink} record={{ ...article, dir: 'home' }} />
        {article.button && <Btn>Mehr erfahren</Btn>}
      </ArticleCont>
      {article.order != true && (
        <ImgCont>
          <Image src={article.image} />
        </ImgCont>
      )}
    </Container>
  )
}
let Btn = styled.button`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  outline: none;
  width: 211.75px;
  height: 59px;
  background: linear-gradient(0deg, #fff5f5, #fff5f5);
  border: 2px solid #3a4b6d;
  cursor: pointer;
  text-align: center;
  vertical-align: center;
  &:active {
    transform: translateY(2px);
  }
`

let Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 200px;
  width: 100%;
  &:first-child {
    margin-top: 115px;
  }
  &:last-child {
    margin-bottom: 100px;
  }
`

let ImgCont = styled.div`
  margin: 0;
  padding: 0;
  max-height: 396px;
  flex: 1;
  position: relative;
`

let ArticleCont = styled.div`
  flex: 1;
  padding: 20px;
`

let Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
