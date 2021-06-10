import matter from 'gray-matter'
import { Contact } from '../../components/Contact'
import { usePlugin } from 'tinacms'
import { useMarkdownForm } from 'next-tinacms-markdown'
import Wrapper from '../../components/wrapper'

export default function AblaufEinerSitzung(props) {
  const formOptions = {
    label: `Update ${props.markdownFile.frontmatter.title}`,
    fields: [
      {
        name: 'frontmatter.title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'frontmatter.address',
        label: 'Address',
        component: 'text',
      },
    ],
  }

  const [contact, form] = useMarkdownForm(props.markdownFile, formOptions)
  usePlugin(form)
  console.log({ contact })
  return (
    <Wrapper data={props.config}>
      <Contact contact={contact.frontmatter} />
    </Wrapper>
  )
}

AblaufEinerSitzung.getInitialProps = async function(ctx) {
  const { slug } = ctx.query
  const content = await import(`../../data/contacts/${slug}.md`)
  const config = await import(`../../data/contacts/config.json`)
  const data = matter(content.default)

  return {
    markdownFile: {
      fileRelativePath: `data/organisationals/ablaufEinerSitzung/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    title: config.default.title,
    config: config,
  }
}
