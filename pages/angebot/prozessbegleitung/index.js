import matter from 'gray-matter'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'next-tinacms-json'
import Wrapper from '../../../components/Wrapper'
import { Article } from '../../../components/Article'
import styled from 'styled-components'
import Meta from '../../../components/Meta'

const Prozessbegleitung = ({ jsonFile, records }) => {
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
    <Wrapper data={data}>
      <Meta />
      {records.length &&
        records.map(record => (
          <ArticleCont key={record.slug}>
            <Article
              isLink
              record={{
                slug: record.slug,
                content: record.document.content,
                title: record.document.data.title,
                dir: 'angebot/prozessbegleitung',
              }}
            />
            {record.document.data.button && <Btn>Mehr erfahren</Btn>}
          </ArticleCont>
        ))}
    </Wrapper>
  )
}

export default Prozessbegleitung

Prozessbegleitung.getInitialProps = async function() {
  const content = await import(
    '../../../data/angebot/prozessbegleitung/config.json'
  )
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
  })(require.context('../../../data/angebot/prozessbegleitung', true, /\.md$/))
  return {
    jsonFile: {
      fileRelativePath: `data/angebot/prozessbegleitung/config.json`,
      data: content.default,
    },
    records: records.sort((p1, p2) =>
      p1.document.data.date > p2.document.data.date ? -1 : 1
    ),
  }
}

const ArticleCont = styled.div`
  &:first-child {
    margin-top: 130px;
  }
  margin-bottom: 60px;
`

let Btn = styled.button`
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
  &:active {
    transform: translateY(2px);
  }
  &:hover {
    background: linear-gradient(0deg, #6380ba, #6380ba), #fff5f5;
    border: 2px solid #6380ba;
    color: #fff;
  }
`
