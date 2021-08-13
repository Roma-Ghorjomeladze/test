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
      <InnerCont>
        <Toggle />
      </InnerCont>
    </Cont>
  )
}

let InnerCont = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  flex: 1;
`

let Cont = styled.div`
  height: 166px;
  width: 100%;
  padding: 0 100px;
  z-index: 2;
  background-color: #fff5f5;
  display: flex;
  align-items: center;
  position: fixed;
  box-shadow: rgb(99 55 64 / 34%) 0px 1px 8px;
  left: 50%;
  transform: translateX(-50%);
  transition: 400ms;
  @media (max-width: 1080px) {
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    height: 0;
    display: block;
  }
`
