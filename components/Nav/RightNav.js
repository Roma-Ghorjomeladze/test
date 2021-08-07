import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DropDown } from '../DropDown'
import { navigation, homeNavigation } from '../../config/navigation'
import Toggle from '../Nav/Toggle'

const Ul = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: flex-end;
 z-index: 5;
 @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    right: 0;
    align-items: center;
    padding: 20px 50px;
    background-color: #FFF5F5;
  }
`

const InnerCont = styled.div`
 display: flex;
 justify-content: space-between;
 flex: 1;
 margin-bottom: 20px;
 @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
`
const LogoCont = styled.div`
  margin: 0 25px;
  width: 91px;
  @media (max-width: 768px) {
    order: -1;
    margin: 0;
  }
`

const Img = styled.img`
  
`

const RightNav = ({ open }) => {
  // useEffect(() => {
  //   const handler = () => {
  //     if (window.innerWidth < 769) {
  //       return
  //     }
  //     if (window.scrollY > 212) {
  //       document.getElementById('header_logo').style.width = '60px'
  //       document.getElementById('header_logo').style.height = '60px'
  //       document.getElementById('header_logo').style.top = '15px'
  //     } else {
  //       document.getElementById('header_logo').style.width = '91px'
  //       document.getElementById('header_logo').style.height = '91px'
  //       document.getElementById('header_logo').style.top = '0'
  //     }
  //   }

  //   window.addEventListener('scroll', handler)
  //   return () => window.removeEventListener('scroll', handler)
  // }, [])

  return (
    <Ul open={open}>
      <Toggle/>
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
          src={'/static/logos/logo.png'}
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
