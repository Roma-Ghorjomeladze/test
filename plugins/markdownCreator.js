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

import { navigationElements } from '../config/availableRouts'
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

export const CreateHomePostPlugin = new MarkdownCreatorPlugin({
  label: '1. Home',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

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
      name: 'frontmatter.linkTo',
      component: 'select',
      label: 'Link article to page',
      description: 'select on which page link to',
      options: navigationElements,
    },
    {
      name: 'frontmatter.button',
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
    order: postInfo.order == true ? false : true,
    button: postInfo.button == true ? true : false,
  }),
  body: () => `update this text.`,
})

export const CreateCraniosacralArticlePlugin = new MarkdownCreatorPlugin({
  label: '2.1. Craniosacral',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/angebot/craniosacral-therapie/self/${slug}.md`
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
      name: 'frontmatter.order',
      description: 'choose alignment of your content',
      label: 'order',
      component: 'toggle',
      toggleLabels: {
        true: 'Top and bottom',
        false: 'Left and right',
      },
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
    order: article.order == true ? false : true,
  }),
  body: () => 'update this article',
})

export const CreateSchwangerschaftArticlePlugin = new MarkdownCreatorPlugin({
  label: '2.1.1. Schwangerschaft',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/angebot/craniosacral-therapie/schwangerschaft/${slug}.md`
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      component: 'text',
      required: true,
    },
    {
      component: 'list',
      name: 'frontmatter.list',
      field: {
        component: 'textarea',
      },
      label: 'List',
      description: 'add items of your list',
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
    list: article.list,
  }),
  body: () => 'update this article',
})

export const CreateNachDerGeburtArticlePlugin = new MarkdownCreatorPlugin({
  label: '2.1.2. Nach der geburt',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/angebot/craniosacral-therapie/nach-der-geburt/${slug}.md`
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
      component: 'list',
      name: 'frontmatter.list',
      field: {
        component: 'textarea',
      },
      label: 'List',
      description: 'add items of your list',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
    list: article.list,
  }),
  body: () => 'update this article',
})

export const CreateKinderUndFamilienArticlePlugin = new MarkdownCreatorPlugin({
  label: '2.1.3. Kinder und familien',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/angebot/craniosacral-therapie/kinder-und-familien/${slug}.md`
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
      component: 'list',
      name: 'frontmatter.list',
      field: {
        component: 'textarea',
      },
      label: 'List',
      description: 'add items of your list',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
    list: article.list,
  }),
  body: () => 'update this article',
})

export const CreateAnwendungsbereicheArticlePlugin = new MarkdownCreatorPlugin({
  label: '2.1.4. Anwendungsbereiche',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/angebot/craniosacral-therapie/anwendungsbereiche/${slug}.md`
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
  label: '2.2. Prantal und geburst therapy',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/angebot/praental-therapie/${slug}.md`
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
      component: 'list',
      name: 'frontmatter.list',
      field: {
        component: 'textarea',
      },
      label: 'List',
      description: 'add items of your list',
    },
    {
      label: 'Bottom Text',
      name: 'frontmatter.bottomText',
      component: 'textarea',
    },
  ],
  frontmatter: article => ({
    title: article.title,
    date: article.date || new Date(),
    list: article.list,
  }),
  body: () => 'update this article',
})

export const CreateProzessbegleitungArticlePlugin = new MarkdownCreatorPlugin({
  label: '2.3. Prozessbegleitung',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

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
  label: '2.4. systemische Aufstellungsarbeit',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/angebot/systemische-arbeit/${slug}.md`
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
      component: 'list',
      name: 'frontmatter.list',
      field: {
        component: 'textarea',
      },
      label: 'List',
      description: 'add items of your list',
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
    list: article.list,
  }),
  body: () => 'update this article',
})

export const CreateTraumaArbeitArticlePlugin = new MarkdownCreatorPlugin({
  label: '2.5. Trauma Arbeit',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/angebot/trauma-arbeit/${slug}.md`
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
  label: '2.6. Astrologysche psychologie',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/angebot/astrologische-psychologie/${slug}.md`
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
  label: '3.1. Ablauf einer sitzung',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/organisationals/ablauf-einer-sitzung/${slug}.md`
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
  label: '3.2. Kosten',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

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

export const CreateKostenUndKrankenkasseArticlePlugin = new MarkdownCreatorPlugin(
  {
    label: '3.3. Kosten und krankenkasse',
    filename: form => {
      const slug = form.title
        .toLowerCase()
        .replace('ü', 'ue')
        .replace('ä', 'ae')
        .replace('ö', 'oe')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9-]/g, '')
        .replace('?', '')

      return `data/organisationals/kosten-und-krankenkasse/${slug}.md`
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
  }
)

export const CreateGutschineArticlePlugin = new MarkdownCreatorPlugin({
  label: '3.4. Gutschine',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/organisationals/gutscheine/${slug}.md`
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
  label: '3.5. Klientnestimmen',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/organisationals/klientenstimmen/${slug}.md`
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

export const CreateProfileArticlePlugin = new MarkdownCreatorPlugin({
  label: '4. Profile',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/andrea-schuppli/${slug}.md`
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

export const CreateSonstigesWasserfilterArticlePlugin = new MarkdownCreatorPlugin(
  {
    label: '5.1 sonstiges wasserfilter',
    filename: form => {
      const slug = form.title
        .toLowerCase()
        .replace('ü', 'ue')
        .replace('ä', 'ae')
        .replace('ö', 'oe')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9-]/g, '')
        .replace('?', '')

      return `data/sonstiges/wasserfilter/${slug}.md`
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
  }
)

export const CreateSonstigesKunstArticlePlugin = new MarkdownCreatorPlugin({
  label: '5.2 sonstiges kunst',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

    return `data/sonstiges/kunst/${slug}.md`
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

export const CreateContactPlugin = new MarkdownCreatorPlugin({
  label: '6. Contact',
  filename: form => {
    const slug = form.title
      .toLowerCase()
      .replace('ü', 'ue')
      .replace('ä', 'ae')
      .replace('ö', 'oe')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace('?', '')

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

// export const CreateCraniosacralSlidePlugin = new MarkdownCreatorPlugin({
//   label: 'Add new slide on craniosacral page',
//   filename: form => {
//     const slug = form.title
// .toLowerCase() //
// .replace('ü', 'ue')
// .replace('ä', 'ae')
// .replace('ö', 'oe')
// .replace(/\s+/g, ' ').trim()
//       .replace(/\s+/g, '-')
//       .replace(/[^a-zA-Z0-9-]/g, '')
//       .replace('?', '')

//     return `data/angebot/craniosacralTherapie/self/${slug}.md`
//   },
//   fields: [
//     {
//       label: 'Title',
//       name: 'title',
//       component: 'text',
//       required: true,
//     },
//     {
//       label: 'Title',
//       name: 'title_left',
//       component: 'text',
//     },
//     {
//       label: 'Left image',
//       name: 'image_left',
//       component: 'image',
//       // Generate the frontmatter value based on the filename
//       parse: media => `/static/${media.filename}`,

//       // Decide the file upload directory for the post
//       uploadDir: () => '/public/static',

//       // Generate the src attribute for the preview image.
//       previewSrc: fullSrc => fullSrc.replace('/public', ''),
//     },
//     {
//       label: 'Title',
//       name: 'title_mid',
//       component: 'text',
//     },
//     {
//       label: 'Middle image',
//       name: 'image_mid',
//       component: 'image',
//       // Generate the frontmatter value based on the filename
//       parse: media => `/static/${media.filename}`,

//       // Decide the file upload directory for the post
//       uploadDir: () => '/public/static',

//       // Generate the src attribute for the preview image.
//       previewSrc: fullSrc => fullSrc.replace('/public', ''),
//     },
//     {
//       label: 'Title',
//       name: 'title_right',
//       component: 'text',
//     },
//     {
//       label: 'Right image',
//       name: 'image_right',
//       component: 'image',
//       // Generate the frontmatter value based on the filename
//       parse: media => `/static/${media.filename}`,

//       // Decide the file upload directory for the post
//       uploadDir: () => '/public/static',

//       // Generate the src attribute for the preview image.
//       previewSrc: fullSrc => fullSrc.replace('/public', ''),
//     },
//   ],
//   frontmatter: article => ({
//     title: article.title,
//     date: article.date || new Date(),
//     type: 'slide',
//     title_left: article.title_left,
//     image_left: article.image_left,
//     title_mid: article.title_mid,
//     image_mid: article.image_mid,
//     title_right: article.title_right,
//     image_right: article.image_right,
//   }),
// })
