import styled from 'styled-components'
import { Article } from './Article'
import Link from 'next/link'
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
        {article.button && isLink && (
          <ClickCont>
            <Link
              key={article.slug}
              href={{ pathname: `/home/${article.slug}` }}
            >
              <A>Mehr erfahren</A>
            </Link>
          </ClickCont>
        )}
      </ArticleCont>
      {article.order != true && (
        <ImgCont>
          <Image src={article.image} />
        </ImgCont>
      )}
    </Container>
  )
}

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
  @media (max-width: 1080px) {
    flex-direction: column;
    &:first-child {
      margin-top: 40px;
    }
    &:last-child {
      margin-bottom: 30px;
    }
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

let A = styled.a`
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
  margin-top: 50px;
  padding: 20px 17px;
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background: linear-gradient(0deg, #6380ba, #6380ba), #fff5f5;
    border: 2px solid #6380ba;
    color: #fff;
  }
`
let ClickCont = styled.div`
  margin-top: 30px;
`
