/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Modified from tinacms/tinacms 
RemarkCreatorPlugin in gatsby-tinacms-remark package 09.29.20

*/

import toMarkdownString from '../utils/toMarkdownString'

const MISSING_FILENAME_MESSAGE =
  'createRemarkButton must be given `filename(form): string`'
const MISSING_FIELDS_MESSAGE =
  'createRemarkButton must be given `fields: Field[]` with at least 1 item'

export class MarkdownCreatorPlugin {
  __type = 'content-creator'
  name
  fields

  // Markdown Specific
  filename
  frontmatter
  body

  constructor(options) {
    if (!options.filename) {
      console.error(MISSING_FILENAME_MESSAGE)
      throw new Error(MISSING_FILENAME_MESSAGE)
    }

    if (!options.fields || options.fields.length === 0) {
      console.error(MISSING_FIELDS_MESSAGE)
      throw new Error(MISSING_FIELDS_MESSAGE)
    }

    this.name = options.label
    this.fields = options.fields
    this.filename = options.filename
    this.frontmatter = options.frontmatter || (() => ({}))
    this.body = options.body || (() => '')
  }

  async onSubmit(form, cms) {
    const fileRelativePath = await this.filename(form)
    const frontmatter = await this.frontmatter(form)
    const markdownBody = await this.body(form)

    cms.api.git.onChange({
      fileRelativePath,
      content: toMarkdownString({
        fileRelativePath,
        frontmatter,
        markdownBody,
      }),
    })
    cms.alerts.success('saved successfully')
  }
}

export const CreateBlogPlugin = new MarkdownCreatorPlugin({
  label: 'Add new post on home page',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/posts/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
    {
      label: 'Author',
      description: 'Who wrote this, yo?',
      name: 'author',
      component: 'text',
    },
  ],
  frontmatter: postInfo => ({
    title: postInfo.title,
    date: postInfo.date || new Date(),
    author: postInfo.author || 'Kurt Vonnegut',
    hero_image: '/static/alfons-taekema-bali.jpg',
  }),
  body: () => `New post, who dis?`,
})

export const CreateContactPlugin = new MarkdownCreatorPlugin({
  label: 'Add new contact',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/contacts/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
    {
      label: 'Address',
      name: 'address',
      component: 'text',
      required: true,
    },
  ],
  frontmatter: contactInfo => ({
    title: contactInfo.title,
    address: contactInfo.address,
    date: postInfo.date || new Date(),
  }),
})

export const CreateProfileArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new profile article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/andrea/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: contactInfo => ({
    title: contactInfo.title,
    date: postInfo.date || new Date(),
  }),
  body: () => 'update this article',
})

export const CreateHomePostPlugin = new MarkdownCreatorPlugin({
  label: 'Add new post on home page',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/home/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
    {
      label: 'Hero Image',
      name: 'image',
      component: 'image',
      // Generate the frontmatter value based on the filename
      parse: media => `/static/${media.filename}`,

      // Decide the file upload directory for the post
      uploadDir: () => '/public/static/',

      // Generate the src attribute for the preview image.
      previewSrc: fullSrc => fullSrc.replace('/public', ''),
    },
    {
      name: 'order',
      description: 'choose alignment of your content',
      label: 'order',
      component: 'toggle',
      toggleLabels: {
        true: 'Right',
        false: 'Left',
      },
    },
    {
      name: 'button',
      description: 'Choose show the button or not',
      label: 'Show button',
      component: 'toggle',
      toggleLabels: {
        true: 'Show',
        false: 'Hide',
      },
    },
  ],
  frontmatter: postInfo => ({
    title: postInfo.title,
    date: postInfo.date || new Date(),
    image: postInfo.image,
    order: postInfo.order == true ? true : false,
    button: postInfo.button == true ? true : false,
  }),
  body: () =>
    `When you add the details for your article, than you will be able to update content of it.`,
})

export const CreateAnwendungsbereicheArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new anwendungsbereiche article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/angebot/craniosacralTherapie/anwendungsbereiche/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
  }),
  body: () => 'update this article',
})

export const CreateKinderUndFamilienArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new kinder Und Familien article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/angebot/craniosacralTherapie/kinderUndFamilien/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
  }),
  body: () => 'update this article',
})

export const CreateNachDerGeburtArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new nach der geburt article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/angebot/craniosacralTherapie/nachDerGeburt/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
  }),
  body: () => 'update this article',
})

export const CreateSchwangerschaftArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new schwangerschaft article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/angebot/craniosacralTherapie/schwangerschaft/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
  }),
  body: () => 'update this article',
})

export const CreatePrantalTherapyArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new prantal therapy article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/angebot/prantalTherapie/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
  }),
  body: () => 'update this article',
})

export const CreateProzessbegleitungArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new prozessbegleitung article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/angebot/prozessbegleitung/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
    {
      name: 'button',
      description: 'Choose show the button or not',
      label: 'Show button',
      component: 'toggle',
      toggleLabels: {
        true: 'Show',
        false: 'Hide',
      },
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
    button: article.button == true ? true : false,
  }),
  body: () => 'update this article',
})

export const CreatesyStemischeArbeitArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new systemischeArbeit article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/angebot/systemischeArbeit/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
    {
      name: 'button',
      description: 'Choose show the button or not',
      label: 'Show button',
      component: 'toggle',
      toggleLabels: {
        true: 'Show',
        false: 'Hide',
      },
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
    button: article.button == true ? true : false,
  }),
  body: () => 'update this article',
})

export const CreateTraumaArbeitArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new traumaArbeit article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/angebot/traumaArbeit/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
    {
      name: 'button',
      description: 'Choose show the button or not',
      label: 'Show button',
      component: 'toggle',
      toggleLabels: {
        true: 'Show',
        false: 'Hide',
      },
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
    button: article.button == true ? true : false,
  }),
  body: () => 'update this article',
})

export const CreateAstrologyArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new astrology article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/angebot/astrologischePsychologie/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
    {
      name: 'button',
      description: 'Choose show the button or not',
      label: 'Show button',
      component: 'toggle',
      toggleLabels: {
        true: 'Show',
        false: 'Hide',
      },
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
    button: article.button == true ? true : false,
  }),
  body: () => 'update this article',
})

export const CreateAblaufEinerSitzungArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new ablauf Einer Sitzung article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/organisationals/ablaufEinerSitzung/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
  }),
  body: () => 'update this article',
})

export const CreateGutschineArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new gutschine article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/organisationals/gutschine/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
  }),
  body: () => 'update this article',
})

export const CreateKlientestimmenArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new klientestimmen article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/organisationals/klientestimmen/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
  }),
  body: () => 'update this article',
})

export const CreateKostenArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new kosten article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/organisationals/kosten/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
  }),
  body: () => 'update this article',
})

export const CreateKostenUndKrankenkasseArticlePlugin = new MarkdownCreatorPlugin({
  label: 'Add new kosten und krankenkasse article',
  filename: form => {
    const slug = form.title
      .replace(/\s+/g, '-')
      .replace(/\[^a-zA-Z0-9]/, '')
      .replace('?', '')
      .toLowerCase()
    return `data/organisationals/kostenUndKrankenkasse/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      label: 'Date',
      name: 'date',
      component: 'date',
      description: 'The default will be today',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
  }),
  body: () => 'update this article',
})