import matter from 'gray-matter'
import { usePlugin } from 'tinacms'
import { useJsonForm } from 'next-tinacms-json'
import Wrapper from '../../../components/Wrapper'

const Gutscheine = ({ jsonFile, records }) => {
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
      <h2>Gutscheine</h2>
    </Wrapper>
  )
}

export default Gutscheine

Gutscheine.getInitialProps = async function() {
  const content = await import(
    '../../../data/organisationals/gutschine/config.json'
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
  })(require.context('../../../data/organisationals/gutschine', true, /\.md$/))
  return {
    jsonFile: {
      fileRelativePath: `data/organisationals/gutschine/config.json`,
      data: content.default,
    },
    records,
  }
}
