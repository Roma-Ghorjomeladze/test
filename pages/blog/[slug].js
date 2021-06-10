import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { usePlugin } from 'tinacms'
import { useMarkdownForm } from 'next-tinacms-markdown'

export default function BlogTemplate(props) {
  const formOptions = {
    label: 'Update Post On Home Page',
    fields: [
      {
        label: 'Hero Image',
        name: 'frontmatter.image',
        component: 'image',
        // Generate the frontmatter value based on the filename
        parse: media => `/static/${media.filename}`,

        // Decide the file upload directory for the post
        uploadDir: () => '/public/static/',

        // Generate the src attribute for the preview image.
        previewSrc: fullSrc => fullSrc.replace('/public', ''),
      },
      {
        name: 'frontmatter.title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'frontmatter.date',
        label: 'Created At',
        component: 'date',
        dateFormat: 'MMMM DD YYYY',
        timeFormat: false,
      },
      {
        name: 'markdownBody',
        label: 'Blog Body',
        component: 'markdown',
      },
      {
        name: 'frontmatter.order',
        description: 'choose alignment of your record',
        label: 'order',
        component: 'toggle',
        toggleLabels: {
          true: 'Right',
          false: 'Left',
        },
      },
    ],
  }

  const [post, form] = useMarkdownForm(props.markdownFile, formOptions)
  usePlugin(form)
  return (
    <div>
      <h1>Single Blog Post</h1>
    </div>
  )
}

BlogTemplate.getInitialProps = async function(ctx) {
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
  }
}
