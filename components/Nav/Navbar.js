import React, { useEffect } from 'react'
import styled from 'styled-components'
import Burger from './Burger'

const Nav = styled.nav`
  width: 100%;
  height: 166px;
  border-bottom: 2px solid #f1f1f1;
  position: fixed;
  display: flex;
  justify-content: space-around;
  background-color: #fff5f5;
  z-index: 5;
  transition: height 400ms;
  align-items: flex-end;
  padding-bottom: 40px;
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: 768px) {
    height: 55px;
  }
`

const Navbar = () => {
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth < 769) {
        return
      }
      if (window.scrollY > 212) {
        document.getElementById('header_container').style.height = '80px'
        document.getElementById('header_container').style.paddingBottom = '10px'
      } else {
        document.getElementById('header_container').style.height = '166px'
        document.getElementById('header_container').style.paddingBottom = '40px'
      }
    }

    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <Nav id="header_container">
      <Burger />
    </Nav>
  )
}

export default Navbar
