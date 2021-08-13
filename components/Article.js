import styled from 'styled-components'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from './Layout'
import { useCMS } from 'tinacms'

export const Article = props => {
  let cms = useCMS()
  return (
    <Layout siteTitle={props.record.title}>
      <article className="blog">
        <div className="blog__info">
          {cms.enabled ? (
            <div className="blog_title_cont">
              <Link
                key={props.record.slug}
                href={{
                  pathname: cms.enabled
                    ? `/${props.record.dir}/${props.record.slug}`
                    : props.record.linkTo,
                }}
              >
                <a>
                  <A>{props.record.title}</A>
                </a>
              </Link>
            </div>
          ) : (
            <A isClickable={props.isClickable && props.isLink}>
              {props.record.title}
            </A>
          )}
        </div>
        {!props.homePage && !!props.record.image && (
          <div>
            <Img alt={props.record.title} src={props.record.image} />
          </div>
        )}
        <ArticelBody className="blog__body">
          <ReactMarkdown source={props.record.content} />
        </ArticelBody>
        {props.record.list && props.record.list.length > 0 && (
          <UnOrderedList>
            {props.record.list.map((el, idx) => (
              <LI key={idx}>{el}</LI>
            ))}
          </UnOrderedList>
        )}
        {!!props.record.bottomText && <P>{props.record.bottomText}</P>}
      </article>
      <style jsx>
        {`
          .blog_title_cont {
            text-align: left;
            font-size: 27px;
            font-weight: bolder;
            line-height: 27px;
            letter-spacing: 0.05em;
            color: #000000;
            font-weight: bold;
          }
          .blog h1 {
            margin-bottom: 0.7rem;
            text-align: left;
            color: #3a4b6d;
          }

          .blog__hero {
            min-height: 300px;
            height: 60vh;
            width: 100%;
            margin: 0;
            overflow: hidden;
            color: #3a4b6d;
          }
          .blog__hero img {
            margin-bottom: 0;
            object-fit: cover;
            min-height: 100%;
            min-width: 100%;
            object-position: center;
          }

          .blog__info {
            padding: 0 0 1.5rem 0;
            width: 100%;
            max-width: 768px;
            color: #3a4b6d;
          }
          .blog__info h1 {
            margin-bottom: 0.66rem;
            text-align: left;
            color: #3a4b6d;
          }
          .blog__info h3 {
            margin-bottom: 0;
            color: #3a4b6d;
            text-align: left;
          }

          .blog__body {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-weight: 300;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.02em;
            color: #3a4b6d;
          }
          .blog__body a {
            padding-bottom: 1.5rem;
            color: #3a4b6d;
          }
          .blog__body:last-child {
            margin-bottom: 0;
          }
          .blog__body h1 h2 h3 h4 h5 h6 p {
            font-weight: normal;
            color: #3a4b6d;
          }
          .blog__body p {
            color: #3a4b6d;
          }
          .blog__body ul {
            list-style: initial;
            color: #3a4b6d;
          }
          .blog__body ul ol {
            margin-left: 1.25rem;
            margin-bottom: 1.25rem;
            padding-left: 1.45rem;
            color: #3a4b6d;
          }

          .blog__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            color: #3a4b6d;
          }
          .blog__footer h2 {
            margin-bottom: 0;
            color: #3a4b6d;
          }
          .blog__footer a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #3a4b6d;
          }
          .blog__footer a svg {
            width: 20px;
            color: #3a4b6d;
          }

          @media (min-width: 768px) {
            .blog {
              display: flex;
              flex-direction: column;
            }
            .blog__body {
              max-width: 800px;
              color: #3a4b6d;
            }
            .blog__body span {
              width: 100%;
              margin: 1.5rem auto;
            }
            .blog__body ul ol {
              margin-left: 1.5rem;
              margin-bottom: 1.5rem;
            }

            .blog__hero {
              min-height: 600px;
              height: 75vh;
            }
            .blog__info {
              text-align: center;
            }
            .blog__info h1 {
            }
            .blog__footer {
              padding: 2.25rem;
            }
            .blog__body p {
              color: red;
            }
          }

          @media (min-width: 1440px) {
            .blog__hero {
              height: 70vh;
            }
            .blog__info {
              padding: 0 0 3rem 0;
            }
            .blog__footer {
              padding: 2rem 2rem 3rem 2rem;
            }
          }
        `}
      </style>
    </Layout>
  )
}
const P = styled.p`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 16px;
  line-height: 33px;
  letter-spacing: 0.02em;
  color: #3a4b6d;
`
let Img = styled.img`
  width: auto;
  height: auto;
`

let A = styled.h2`
  text-decoration: none;
  font-family: 'Sana';
  color: #3a4b6d;
  text-align: left;
  font-weight: 400;
  cursor: pointer;
  font-size: 27px;
  &:hover {
    color: ${({ isClickable }) => (isClickable ? '#00008b' : '#3a4b6d')};
  }
  letter-spacing: 1.5px;
  @media (max-width: 1080px) {
    font-size: 20px;
    letter-spacing: 0.8px;
  }
`
const ArticelBody = styled.div`
  max-width: 900px;
  p {
    -webkit-letter-spacing: -0.5px;
    -moz-letter-spacing: -0.5px;
    -ms-letter-spacing: -0.5px;
    letter-spacing: -0.5px;
    line-height: 1.5;
    font-weight: 300;
  }
  @media (max-width: 1080px) {
    p {
      font-size: 17px;
    }
  }
  @media (max-width: 1080px) {
    p {
      font-size: 14px;
    }
  }
`
const UnOrderedList = styled.ul``
const LI = styled.li`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 16px;
  line-height: 33px;
  letter-spacing: 0.02em;
  color: #3a4b6d;
`
