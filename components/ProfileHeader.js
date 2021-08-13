import React from 'react'
import NavBar from './Nav/Navbar'
import styled from 'styled-components'
import Image from 'next/image'
export default function Header(props) {
  return (
    <>
      <NavBar />
      {props.data.frontmatter && (
        <Outer>
          <Container>
            <Image
              layout="fill"
              objectFit="cover"
              src={props.data.frontmatter.image}
              objectPosition="bottom center"
            />
            <Page>{props.data.frontmatter.title}</Page>
          </Container>
        </Outer>
      )}
    </>
  )
}

let Container = styled.div`
  width: 100vw;
  min-height: 900px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
`
let Page = styled.span`
  position: absolute;
  left: 110px;
  bottom: 40px;
  z-index: 1;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  max-width: 350px;
`
let Outer = styled.div``
