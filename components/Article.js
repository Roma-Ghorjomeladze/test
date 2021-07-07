import styled from 'styled-components'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Layout from './Layout'

export const Article = props => {
  return (
    <Layout siteTitle={props.record.title}>
      <article className="blog">
        <div className="blog__info">
          {!!props.isLink ? (
            <div className="blog_title_cont">
              <Link
                key={props.record.slug}
                href={{
                  pathname: `/${props.record.dir}/${props.record.slug}`,
                  query: { post: props.record.slug },
                }}
              >
                <A>
                  <Span>{props.record.title}</Span>
                </A>
              </Link>
            </div>
          ) : (
            <h1>{props.record.title}</h1>
          )}
        </div>
        {!props.homePage && !!props.record.image && (
          <div>
            <img src={props.record.image} />
          </div>
        )}
        <ArticelBody className="blog__body">
          <ReactMarkdown source={props.record.content} />
        </ArticelBody>
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
          }

          .blog__hero {
            min-height: 300px;
            height: 60vh;
            width: 100%;
            margin: 0;
            overflow: hidden;
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
          }
          .blog__info h1 {
            margin-bottom: 0.66rem;
            text-align: left;
          }
          .blog__info h3 {
            margin-bottom: 0;
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
          }
          .blog__body ul ol {
            margin-left: 1.25rem;
            margin-bottom: 1.25rem;
            padding-left: 1.45rem;
          }

          .blog__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 1.25rem;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }
          .blog__footer h2 {
            margin-bottom: 0;
          }
          .blog__footer a {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .blog__footer a svg {
            width: 20px;
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

let A = styled.a`
  text-decoration: none;
  text-align: left;
  font-weight: 400;
  cursor: pointer;
  margin-top: 30px !important;
  &:hover {
    color: #00008b;
  }
`
const Span = styled.span`
  letter-spacing: 1.5px;
  font-family: 'Roboto' sans-serif;
  @media (max-width: 1080px) {
    font-size: 20px;
    letter-spacing: 0.8px;
  }
  @media (max-width: 1080px) {
    font-size: 17px;
    letter-spacing: 0.3px;
  }
`
const ArticelBody = styled.div`
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
