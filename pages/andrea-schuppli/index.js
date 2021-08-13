import matter from 'gray-matter'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'next-tinacms-json'
import ProfileWrapper from '../../components/ProfileWrapper'
import { Article } from '../../components/Article'
import styled from 'styled-components'
import Wrapper from '../../components/Wrapper'

const Andrea = ({ jsonFile, records }) => {
  const formOptions = {
    label: 'Site Config',
    fields: [
      {
        name: 'frontmatter.title',
        label: 'Site Title',
        component: 'text',
      },
      {
        label: 'Cover Image',
        name: 'frontmatter.image',
        component: 'image',
        // Generate the frontmatter value based on the filename
        parse: media => `/static/${media.filename}`,

        // Decide the file upload directory for the post
        uploadDir: () => '/public/static',

        // Generate the src attribute for the preview image.
        previewSrc: fullSrc => fullSrc.replace('/public', ''),
      },
    ],
  }
  const [data, form] = useJsonForm(jsonFile, formOptions)
  usePlugin(form)
  return (
    <Wrapper
      displayCover={false}
      data={data}
      title={jsonFile.data.frontmatter.title}
    >
      <Div></Div>
      <Container>
        <Image
          src={jsonFile.data.frontmatter.image}
          objectPosition="bottom center"
        />
        <Page>{jsonFile.data.frontmatter.title}</Page>
      </Container>
      {records.length &&
        records.map(record => (
          <ArticleCont key={record.slug}>
            <Article
              isLink
              record={{
                slug: record.slug,
                content: record.document.content,
                title: record.document.data.title,
                dir: 'andrea-schuppli',
              }}
            />
          </ArticleCont>
        ))}
    </Wrapper>
  )
}

export default Andrea

Andrea.getInitialProps = async function() {
  const content = await import('../../data/andrea-schuppli/config.json')
  let records = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      const document = matter(value.default)
      return { document, slug }
    })
    return data
  })(require.context('../../data/andrea-schuppli', true, /\.md$/))
  return {
    jsonFile: {
      fileRelativePath: `data/andrea-schuppli/config.json`,
      data: content.default,
    },
    records: records.sort((p1, p2) =>
      p1.document.data.date > p2.document.data.date ? 1 : -1
    ),
  }
}

const ArticleCont = styled.div`
  &:first-child {
    margin-top: 130px;
  }
  @media (max-width: 1080px) {
    &:first-child {
      margin-top: 39px;
    }
  }
  margin-bottom: 60px;
`
const Div = styled.div`
  height: 166px;
  @media (max-width: 768px) {
    height: 0;
  }
`

let Container = styled.div`
  width: 100%;
  height: 630px;
  margin: 0 0 50px 0;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 1080px) {
    height: 400px;
  }
`
let Page = styled.span`
  letter-spacing: 0.05em;
  color: #fff5f5;
  text-shadow: 0px 2px 16px #000000;
  font-family: 'Sana';
  position: absolute;
  left: 110px;
  bottom: 40px;
  z-index: 2;
  font-size: 30px;
  line-height: 30px;
  max-width: 350px;
  @media (max-width: 768px) {
    left: 40px;
    bottom: 20px;
    font-size: 23px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
