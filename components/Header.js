import React from 'react'
import styled from 'styled-components'
import { Cover } from './Cover'
import NavBar from './Nav/Navbar'
import RightNav from './Nav/RightNav'
export default function Header(props) {
  return (
    <Cont>
      <RightNav/>
      {/* <NavBar /> */}
      {/* {props.data.frontmatter && (
        <Cover
          src={props.data?.frontmatter.image}
          title={props.data?.frontmatter.title}
        />
      )} */}
    </Cont>
  )
}

let Cont = styled.div`
  height: 144px;
  width: 100%;
  max-width: 1440px;
  background-color: #FFF5F5;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 0;
  }
`;