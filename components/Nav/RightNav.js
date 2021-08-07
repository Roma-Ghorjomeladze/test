import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DropDown } from '../DropDown'
import { navigation, homeNavigation } from '../../config/navigation'
import Toggle from '../Nav/Toggle'

const Ul = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 5;
  flex: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    right: 0;
    align-items: center;
    padding: 20px 50px;
    background-color: #fff5f5;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  }
`

// const Ul = styled.div`
//   list-style: none;
//   display: flex;
//   position: fixed;
//   justify-content: space-between;
//   width: 100%;
//   transition: height 500ms;
//   margin: 0;
//   padding: 0 30px;
//   @media (max-width: 768px) {
//     flex-flow: column wrap;
//     background-color: #fff5f5;
//     position: fixed;
//     transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
//     top: 0;
//     right: 0;
//     width: 300px;
//     padding-top: 20px;
//     padding-bottom: 30px;
//     transition: transform 0.3s ease-in-out;
//   }
// `

const InnerCont = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 20px;
  align-items: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
`
const LogoCont = styled.div`
  margin: 0 35px 30px 35px;
  width: 91px;
  transition: 400ms;
  @media (max-width: 1080px) {
    margin: 0 20px 30px 20px;
  }
  @media (max-width: 768px) {
    order: -1;
    margin: 0;
  }
`

const Img = styled.img`
  width: 100%;
`

const RightNav = ({ open }) => {
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth < 769) {
        return
      }
      if (window.scrollY > 190) {
        document.getElementById('header_logo').style.width = '60px'
        document.getElementById('header_logo').style.marginBottom = '11px'
      } else {
        document.getElementById('header_logo').style.width = '91px'
        document.getElementById('header_logo').style.marginBottom = '30px'
      }
    }

    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <Ul open={open}>
      <InnerCont className="innerCont">
        <DropDown key={homeNavigation.index} nav={homeNavigation} />
        <DropDown key={navigation.angebot.index} nav={navigation.angebot} />
        <DropDown
          key={navigation.organisationals.index}
          nav={navigation.organisationals}
        />
      </InnerCont>
      <LogoCont id="header_logo">
        <Img className="" src={'/static/logos/logo.png'} alt="Logo" />
      </LogoCont>
      <InnerCont className="innerCont">
        <DropDown key={navigation.andrea.index} nav={navigation.andrea} />
        <DropDown key={navigation.other.index} nav={navigation.other} />
        <DropDown key={navigation.contacts.index} nav={navigation.contacts} />
      </InnerCont>
    </Ul>
  )
}

export default RightNav
