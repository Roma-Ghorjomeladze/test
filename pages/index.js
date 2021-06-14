import matter from 'gray-matter'
import { useJsonForm } from 'next-tinacms-json'
import { usePlugin } from 'tinacms'

import Wrapper from '../components/Wrapper'
import { HomePost } from '../components/HomePost'
import { getGithubPreviewProps } from 'next-tinacms-github'

const Index = ({ jsonFile, homeArticles }) => {
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
      {homeArticles.length &&
        homeArticles.map(article => (
          <HomePost
            key={article.slug}
            article={{
              ...article.document.data,
              slug: article.slug,
              content: article.document.content,
            }}
            isLink
          />
        ))}
    </Wrapper>
  )
}

export default Index

Index.getInitialProps = async function({ preview, previewData }) {
  if (preview) {
    return getGithubPreviewProps({ ...previewData })
  }
  const content = await import(`../data/home/config.json`)
  // get all blog data for list
  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      return {
        document,
        slug,
      }
    })
    return data
  })(require.context('../data/home', true, /\.md$/))

  return {
    jsonFile: {
      fileRelativePath: `data/home/config.json`,
      data: content.default,
    },

    homeArticles: posts.sort((p1, p2) => (p1.date > p2.date ? 1 : -1)),
    sourceProvider: null,
    preview: false,
    error: null,
  }
}
