import React from 'react'
import App from 'next/app'
import { TinaProvider, TinaCMS } from 'tinacms'
import { GitClient, GitMediaStore } from '@tinacms/git-client'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { DateFieldPlugin } from 'react-tinacms-date'
import '../styles/global.css'

import {
  CreateBlogPlugin,
  CreateContactPlugin,
  CreateHomePostPlugin,
  CreateProfileArticlePlugin,
  CreateAnwendungsbereicheArticlePlugin,
  CreateKinderUndFamilienArticlePlugin,
  CreateNachDerGeburtArticlePlugin,
  CreateSchwangerschaftArticlePlugin,
  CreatePrantalTherapyArticlePlugin,
  CreateProzessbegleitungArticlePlugin,
  CreatesyStemischeArbeitArticlePlugin,
  CreateTraumaArbeitArticlePlugin,
  CreateAstrologyArticlePlugin,
  CreateAblaufEinerSitzungArticlePlugin,
  CreateGutschineArticlePlugin,
  CreateKlientestimmenArticlePlugin,
  CreateKostenArticlePlugin,
  CreateKostenUndKrankenkasseArticlePlugin,
} from '../plugins/markdownCreator'

class MyApp extends App {
  constructor() {
    super()
    const git = new GitClient('http://localhost:3000/___tina')
    this.cms = new TinaCMS({
      enabled: process.env.NODE_ENV === 'development',
      sidebar: {
        position: 'overlay',
      },
      apis: {
        git,
      },
      media: new GitMediaStore(git),
    })

    this.cms.plugins.add(MarkdownFieldPlugin)
    this.cms.plugins.add(DateFieldPlugin)
    this.cms.plugins.add(CreateAnwendungsbereicheArticlePlugin)
    this.cms.plugins.add(CreateKinderUndFamilienArticlePlugin)
    this.cms.plugins.add(CreateNachDerGeburtArticlePlugin)
    this.cms.plugins.add(CreateSchwangerschaftArticlePlugin)
    this.cms.plugins.add(CreatePrantalTherapyArticlePlugin)
    this.cms.plugins.add(CreateProzessbegleitungArticlePlugin)
    this.cms.plugins.add(CreatesyStemischeArbeitArticlePlugin)
    this.cms.plugins.add(CreateAstrologyArticlePlugin)
    this.cms.plugins.add(CreateTraumaArbeitArticlePlugin)
    this.cms.plugins.add(CreateHomePostPlugin)
    this.cms.plugins.add(CreateProfileArticlePlugin)
    this.cms.plugins.add(CreateContactPlugin)
    this.cms.plugins.add(CreateBlogPlugin)
    this.cms.plugins.add(CreateAblaufEinerSitzungArticlePlugin)
    this.cms.plugins.add(CreateGutschineArticlePlugin)
    this.cms.plugins.add(CreateKlientestimmenArticlePlugin)
    this.cms.plugins.add(CreateKostenArticlePlugin)
    this.cms.plugins.add(CreateKostenUndKrankenkasseArticlePlugin)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <TinaProvider cms={this.cms}>
        <Component {...pageProps} />
      </TinaProvider>
    )
  }
}
export default MyApp
