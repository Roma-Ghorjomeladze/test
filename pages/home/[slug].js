import matter from 'gray-matter'
import Wrapper from '../../components/Wrapper'
import { HomePost } from '../../components/HomePost'
import { usePlugin } from 'tinacms'
import { useMarkdownForm } from 'next-tinacms-markdown'

export default function HomePostItem(props) {
  const formOptions = {
    label: `Update ${props.markdownFile.frontmatter.title}`,
    fields: [
      {
        name: 'frontmatter.title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'markdownBody',
        label: 'Blog Body',
        component: 'markdown',
      },
      {
        label: 'Date',
        name: 'frontmatter.date',
        component: 'date',
        description: 'The articles will be sorted accordint to this date',
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
      {
        name: 'frontmatter.order',
        description: 'choose alignment of your content',
        label: 'order',
        component: 'toggle',
        toggleLabels: {
          true: 'Right',
          false: 'Left',
        },
      },
      {
        name: 'frontmatter.button',
        description: 'Choose show the button or not',
        label: 'button',
        component: 'toggle',
        toggleLabels: {
          true: 'Show',
          false: 'Hide',
        },
      },
    ],
  }

  const [record, form] = useMarkdownForm(props.markdownFile, formOptions)
  usePlugin(form)
  return (
    <Wrapper data={props.config}>
      <HomePost
        article={{
          ...record.frontmatter,
          content: record.markdownBody,
          slug: '',
          dir: '',
        }}
      />
    </Wrapper>
  )
}

HomePostItem.getInitialProps = async function(ctx) {
  const { slug } = ctx.query
  const content = await import(`../../data/home/${slug}.md`)
  const config = await import(`../../data/home/config.json`)
  const data = matter(content.default)

  return {
    markdownFile: {
      fileRelativePath: `data/home/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    title: config.default.title,
    config: config,
  }
}
