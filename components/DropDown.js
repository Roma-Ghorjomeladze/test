import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export const DropDown = ({ nav }) => {
  const [isOpen, setIsOpen] = useState(false)
  const show = () => setIsOpen(true)
  const hide = () => setIsOpen(false)

  return (
    <DropDownContainer onMouseLeave={hide} onMouseOver={show}>
      <DropDownHeader>
        {nav.default.isNotLink ? (
          <A>{nav.default.label}</A>
        ) : (
          <Link
            href={{
              pathname: nav.default.isNotLink ? '' : nav.default.href,
              path: nav.default.isNotLink ? '' : nav.default.href,
            }}
          >
            <a>
              <A>{nav.default.label}</A>
            </a>
          </Link>
        )}
      </DropDownHeader>
      {isOpen && nav.options.length > 0 && (
        <DropDownListContainer>
          {nav.options &&
            nav.options.length > 0 &&
            nav.options.map(option => (
              <div key={option.href}>
                <LinkCont>
                  <Link
                    href={{
                      pathname: option.href,
                      path: option.href,
                    }}
                  >
                    <a>
                      <ChildNavs>{option.label}</ChildNavs>
                    </a>
                  </Link>
                </LinkCont>
                {option.options &&
                  option.options.length > 0 &&
                  option.options.map(subNav => {
                    return (
                      <SubLinkCont key={subNav.href}>
                        <Link
                          key={subNav.href}
                          href={{
                            pathname: subNav.href,
                            path: subNav.href,
                          }}
                        >
                          <a>
                            <A>- {subNav.label}</A>
                          </a>
                        </Link>
                      </SubLinkCont>
                    )
                  })}
              </div>
            ))}
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}

const DropDownContainer = styled('div')`
  position: relative;
  padding: 10px 0;
`

const DropDownHeader = styled('div')`
  cursor: pointer;
`

const DropDownListContainer = styled('div')`
  position: absolute;
  background: #fff5f5;
  padding: 18px 30px;
  left: -30px;
  min-width: 200px;
  z-index: 33;
  @media (max-width: 768px) {
    min-width: 350px;
    box-shadow: 1px 1px 1px 1px #ffe6e6;
    left: -70px;
  }
`

let A = styled.span`
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: #3a4b6d;
`

let ChildNavs = styled.span`
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  color: #3a4b6d;
  cursor: pointer;
  white-space: nowrap;
`

let LinkCont = styled.div`
  padding: 10px 0;
  z-index: 555;
`
let SubLinkCont = styled.div`
  padding: 5px 0;
  margin-left: 15px;
  white-space: nowrap;
  z-index: 555;
`
