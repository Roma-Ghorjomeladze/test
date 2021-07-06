import React from 'react'
import { Cover } from './Cover'
import NavBar from './Nav/Navbar'
export default function Header(props) {
  return (
    <>
      <NavBar />
      {props.data.frontmatter && (
        <Cover
          src={props.data?.frontmatter.image}
          title={props.data?.frontmatter.title}
        />
      )}
    </>
  )
}
