import React, { useState } from 'react'
import styled from 'styled-components'
import Toggle from './Nav/Toggle'
export default function Header(props) {
  return (
    <Cont>
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
  @media (max-width: 768px) {
    height: 0;
    display: block;
    position: unset;
  }
`
