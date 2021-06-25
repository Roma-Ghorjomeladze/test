import styled from 'styled-components'
import { useCMS } from 'tinacms'
import { navigation } from '../config/navigation'
import { EditLink } from './EditLink'
import Link from 'next/link'

export default function Footer() {
  const cms = useCMS()
  let date = new Date()

  return (
    <Footer_>
      <Cont>
        {Object.values(navigation).map(nav => {
          return (
            <NavItem>
              <NavHeaderCont>
                <Link href={nav.default.isNotLink ? '' : nav.default.href}>
                  <NavHeader>{nav.default.label}</NavHeader>
                </Link>
              </NavHeaderCont>
              <NavBody>
                {nav.options.map(subNav => {
                  return (
                    <div>
                      <SubNavContainer>
                        <Link href={subNav.isNotLink ? '' : subNav.href}>
                          <A>{subNav.label}</A>
                        </Link>
                      </SubNavContainer>
                      {subNav.options &&
                        subNav.options.map(sn => {
                          return (
                            <SubNavContainer>
                              <Link href={sn.isNotLink ? '' : sn.href}>
                                <A>- {sn.label}</A>
                              </Link>
                            </SubNavContainer>
                          )
                        })}
                    </div>
                  )
                })}
              </NavBody>
            </NavItem>
          )
        })}
        <Img className="logo" src={'/static/logos/logo.svg'} alt="Logo" />
      </Cont>
      <CopyRight>{`Copyright © ${date.getFullYear()} Entdeckungsraum`}</CopyRight>
      <EditLink cms={cms} />
    </Footer_>
  )
}
const Cont = styled.div`
  display: flex;
  width: 100%;
`

const Footer_ = styled.div`
  width: 100%;
  padding: 65px 80px;
  background-color: #8a3848;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
`

const NavHeader = styled.h2`
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #fff5f5;
  cursor: pointer;
`
const NavIndex = styled.span`
  margin-right: 10px;
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #fff5f5;
`
const NavHeaderCont = styled.div`
  display: flex;
  margin-bottom: 10px;
`
const NavItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  &:last-child {
    align-self: flex-end;
    margin-bottom: -20px;
  }
`
const NavBody = styled.div``
const NavIndexSmall = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  font-weight: bold;
  margin-right: 10px;
`
const SubNavContainer = styled.div`
  margin-bottom: 8px;
`
const SubNavTitle = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: #fff5f5;
`
let Img = styled.img`
  align-self: flex-end;
`
let CopyRight = styled.p`
  margin-left: 30px;
  margin-top: 20px;
  color: #fff;
`
let A = styled.a`
  font-size: 18px;
  line-height: 22px;
  color: #fff5f5;
  cursor: pointer;
`
