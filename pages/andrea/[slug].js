import matter from 'gray-matter'
import { usePlugin } from 'tinacms'
import { useMarkdownForm } from 'next-tinacms-markdown'
import Wrapper from '../../components/Wrapper'
import { Article } from '../../components/Article'
import styled from 'styled-components'

export default function Gutschine(props) {
  const formOptions = {
    label: `Update ${props.markdownFile.frontmatter.title}`,
    fields: [
      {
        name: 'frontmatter.title',
        label: 'Title',
        component: 'text',
      },
      {
        label: 'Date',
        name: 'frontmatter.date',
        component: 'date',
        description: 'The articles will be sorted accordint to this date',
      },
      {
        name: 'markdownBody',
        label: 'Blog Body',
        component: 'markdown',
      },
    ],
    async onSubmit(form, cms) {
      // const fileRelativePath = await this.filename(form)
      // const frontmatter = await this.frontmatter(form)
      // const markdownBody = await this.body(form)

      // cms.api.git.onChange({
      //   fileRelativePath,
      //   content: toMarkdownString({
      //     fileRelativePath,
      //     frontmatter,
      //     markdownBody,
      //   }),
      // })
      console.log({ form })
      cms.alerts.success('saved successfully')
    },
  }

  const [record, form] = useMarkdownForm(props.markdownFile, formOptions)
  usePlugin(form)
  return (
    <Wrapper data={props.config}>
      <ArticleCont>
        <Article
          record={{
            slug: '',
            title: record.frontmatter.title,
            content: record.markdownBody,
          }}
        />
      </ArticleCont>
    </Wrapper>
  )
}

Gutschine.getInitialProps = async function(ctx) {
  const { slug } = ctx.query
  const content = await import(`../../data/andrea/${slug}.md`)
  const config = await import(`../../data/andrea/config.json`)
  const data = matter(content.default)

  return {
    markdownFile: {
      fileRelativePath: `data/andrea/${slug}.md`,
      frontmatter: data.data,
      markdownBody: data.content,
    },
    title: config.default.title,
    config: config,
  }
}

const ArticleCont = styled.div`
  margin-top: 100px;
  margin-bottom: 60px;
`
