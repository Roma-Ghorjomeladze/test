import styled from 'styled-components'
import React, { useEffect } from 'react'
import { Cover } from './Cover'
import { DropDown } from './DropDown'
import { navigation, homeNavigation } from '../config/navigation'
export default function Header(props) {
  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 212) {
        document.getElementById('header_container').style.height = '80px'
        document.getElementById('header_logo').style.width = '60px'
      } else {
        document.getElementById('header_container').style.height = '166px'
        document.getElementById('header_logo').style.width = '91px'
      }
    }

    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <>
      <Container id="header_container">
        <FlexCont>
          <InnerCont>
            <DropDown nav={homeNavigation} />
            <DropDown nav={navigation.angebot} />
            <DropDown nav={navigation.organisationals} />
          </InnerCont>
          <Img
            id="header_logo"
            className="logo"
            src={'/static/logos/logo.svg'}
            alt="Logo"
          />
          <InnerCont>
            <DropDown nav={navigation.andrea} />
            <DropDown nav={navigation.other} />
            <DropDown nav={navigation.contacts} />
          </InnerCont>
        </FlexCont>
      </Container>
      {props.data && (
        <Cover
          src={props.data?.frontmatter.image}
          title={props.data?.frontmatter.title}
        />
      )}
    </>
  )
}

let Container = styled.div`
  width: 100%;
  height: 166px;
  left: 0px;
  background: #fff5f5;
  top: 0;
  z-index: 10;
  position: fixed;
  transition: height 400ms;
`

let FlexCont = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

let InnerCont = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
`
let Img = styled.img`
  z-index: 99;
  transition: width 400ms;
`
