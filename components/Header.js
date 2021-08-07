import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Toggle from './Nav/Toggle'
export default function Header(props) {
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth < 769) {
        document.getElementById('header_container').style.height = 'auto'
        return
      }
      if (window.scrollY > 190) {
        document.getElementById('header_container').style.height = '80px'
      } else {
        document.getElementById('header_container').style.height = '166px'
      }
    }

    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <Cont id="header_container">
      <Toggle />
    </Cont>
  )
}

let Cont = styled.div`
  height: 166px;
  width: 100%;
  z-index: 2;
  max-width: 1440px;
  background-color: #fff5f5;
  display: flex;
  align-items: flex-end;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  transition: 400ms;
  @media (max-width: 768px) {
    height: 0;
    display: block;
    position: unset;
  }
`
