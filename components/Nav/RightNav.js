import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DropDown } from '../DropDown'
import { navigation, homeNavigation } from '../../config/navigation'

const Ul = styled.div`
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
    background-color: #fff5f5;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    width: 300px;
    padding-top: 20px;
    padding-bottom: 30px;
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
    padding-top: 0;
    flex-direction: column;
  }
`
const LogoCont = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
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
        <DropDown key={homeNavigation.index} nav={homeNavigation} />
        <DropDown key={navigation.angebot.index} nav={navigation.angebot} />
        <DropDown
          key={navigation.organisationals.index}
          nav={navigation.organisationals}
        />
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
        <DropDown key={navigation.andrea.index} nav={navigation.andrea} />
        <DropDown key={navigation.other.index} nav={navigation.other} />
        <DropDown key={navigation.contacts.index} nav={navigation.contacts} />
      </InnerCont>
    </Ul>
  )
}

export default RightNav
