import matter from 'gray-matter'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'next-tinacms-json'
import Wrapper from '../../../components/Wrapper'

const AblaufEinerSitzung = ({ jsonFile, records }) => {
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
      <h2>klientestimmen</h2>
    </Wrapper>
  )
}

export default AblaufEinerSitzung

AblaufEinerSitzung.getInitialProps = async function() {
  const content = await import(
    '../../../data/organisationals/klientestimmen/config.json'
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
  })(
    require.context(
      '../../../data/organisationals/klientestimmen',
      true,
      /\.md$/
    )
  )
  return {
    jsonFile: {
      fileRelativePath: `data/organisationals/klientestimmen/config.json`,
      data: content.default,
    },
    records: records.sort((p1, p2) => (p1.date > p2.date ? 1 : -1)),
  }
}
