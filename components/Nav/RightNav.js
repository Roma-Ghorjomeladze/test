import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DropDown } from '../DropDown'
import { navigation, homeNavigation } from '../../config/navigation'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  transition: height 500ms;
  margin: 0;
  padding: 0 30px;
  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

const InnerCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 6;
  padding-top: 30px;
  @media (max-width: 768px) {
    order: 2;
    flex-direction: column;
  }
`
const LogoCont = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
`

const Img = styled.img`
  width: 90px;
  height: 90px;
  transition: width 500ms;
  position: relative;
  top: 0;
`

const RightNav = ({ open }) => {
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth < 769) {
        return
      }
      if (window.scrollY > 212) {
        document.getElementById('header_logo').style.width = '60px'
        document.getElementById('header_logo').style.top = '15px'
      } else {
        document.getElementById('header_logo').style.width = '91px'
        document.getElementById('header_logo').style.top = '0'
      }
    }

    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <Ul open={open}>
      <InnerCont>
        <DropDown nav={homeNavigation} />
        <DropDown nav={navigation.angebot} />
        <DropDown nav={navigation.organisationals} />
      </InnerCont>
      <LogoCont>
        <Img
          id="header_logo"
          className=""
          src={'/static/logos/logo.svg'}
          alt="Logo"
        />
      </LogoCont>
      <InnerCont>
        <DropDown nav={navigation.andrea} />
        <DropDown nav={navigation.other} />
        <DropDown nav={navigation.contacts} />
      </InnerCont>
    </Ul>
  )
}

export default RightNav
