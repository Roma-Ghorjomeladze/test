import React from 'react'
import App from 'next/app'
import { TinaProvider, TinaCMS } from 'tinacms'
import { GitClient, GitMediaStore } from '@tinacms/git-client'
import { MarkdownFieldPlugin } from 'react-tinacms-editor'
import { DateFieldPlugin } from 'react-tinacms-date'
import { EditLink } from '../components/EditLink'
import '../styles/global.css'
import { GithubClient, TinacmsGithubProvider } from 'react-tinacms-github'
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
  CreateCraniosacralArticlePlugin,
  CreateWissenswertesKunstArticlePlugin,
  CreateWissenswertesWasserfilterArticlePlugin,
} from '../plugins/markdownCreator'

class MyApp extends App {
  constructor(props) {
    super(props)
    const githubClient = new GithubClient({
      proxy: '/api/proxy-github',
      authCallbackRoute: '/api/create-github-access-token',
      clientId: process.env.GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.REPO_FULL_NAME,
      baseBranch: process.env.BASE_BRANCH,
      authScope: 'repo',
    })
    const git = new GitClient('http://localhost:3000/___tina')
    this.cms = new TinaCMS({
      enabled: !!props.pageProps.preview,
      sidebar: { position: 'overlay' },
      apis: {
        git,
        github: githubClient,
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
    this.cms.plugins.add(CreateCraniosacralArticlePlugin)
    this.cms.plugins.add(CreateWissenswertesKunstArticlePlugin)
    this.cms.plugins.add(CreateWissenswertesWasserfilterArticlePlugin)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <TinaProvider cms={this.cms}>
        <TinacmsGithubProvider
          onLogin={onLogin}
          onLogout={onLogout}
          error={pageProps.error}
        >
          <Component {...pageProps} />
        </TinacmsGithubProvider>
      </TinaProvider>
    )
  }
}
export default MyApp

const onLogin = async () => {
  const token = localStorage.getItem('tinacms-github-token') || null
  const headers = new Headers()

  if (token) {
    headers.append('Authorization', 'Bearer ' + token)
  }

  const resp = await fetch(`/api/preview`, { headers: headers })
  const data = await resp.json()
}

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload()
  })
}
