import styled from 'styled-components'
import { Article } from './Article'
import Link from 'next/link'
// import Image from 'next/image'
export const HomePost = ({ article, isLink }) => {
  return (
    <Container>
      {article.order == true && (
        <ImgCont>
          <Image alt={article.title} src={article.image} />
        </ImgCont>
      )}
      <ArticleCont>
        <Article
          isLink={!!isLink}
          homePage={true}
          record={{ ...article, dir: 'home' }}
        />
        {article.button && isLink && (
          <ClickCont>
            <Link
              key={article.slug}
              href={{
                pathname: `/home/${article.slug}`,
                query: { name: article.slug },
              }}
            >
              <a>
                <A>Mehr erfahren</A>
              </a>
            </Link>
          </ClickCont>
        )}
      </ArticleCont>
      {article.order != true && (
        <ImgCont>
          <Image
            alt={article.title}
            objectFit="contain"
            layout="fill"
            src={article.image}
          />
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
    margin-bottom: 35px;
    &:first-child {
      margin-top: 40px;
    }
    &:last-child {
      margin-bottom: 30px;
    }
  }
`

let ImgCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  max-height: 396px;
  flex: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 1080px) {
    justify-content: flex-start;
    order: 1;
    margin-bottom: 10px;
    margin-top: 30px;
  }
`

let ArticleCont = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 1080px) {
    order: 2;
  }
`

let A = styled.span`
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
let Image = styled.img`
  object-fit: cover;
`
