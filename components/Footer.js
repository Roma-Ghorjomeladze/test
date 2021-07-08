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
            <NavItem key={nav.index}>
              <NavHeaderCont>
                <Link
                  href={{
                    pathname: nav.default.isNotLink ? '' : nav.default.href,
                    query: { name: nav.default.label },
                  }}
                >
                  <a>
                    <NavHeader>{nav.default.label}</NavHeader>
                  </a>
                </Link>
              </NavHeaderCont>
              <NavBody>
                {nav.options.map(subNav => {
                  return (
                    <div key={subNav.label}>
                      <SubNavContainer>
                        <Link
                          href={{
                            pathname: subNav.isNotLink ? '' : subNav.href,
                            query: { name: subNav.label },
                          }}
                        >
                          <A>{subNav.label}</A>
                        </Link>
                      </SubNavContainer>
                      {subNav.options &&
                        subNav.options.map(sn => {
                          return (
                            <SubNavContainer key={sn.label}>
                              <Link
                                href={{
                                  pathname: sn.isNotLink ? '' : sn.href,
                                  query: { name: sn.label },
                                }}
                              >
                                <a>
                                  <A>- {sn.label}</A>
                                </a>
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
  @media (max-width: 1080px) {
    flex-direction: column;
  }
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
  @media (max-width: 1080px) {
    margin-bottom: 25px;
  }
`
const NavBody = styled.div``

const SubNavContainer = styled.div`
  margin-bottom: 8px;
`
let Img = styled.img`
  align-self: flex-end;
`
let CopyRight = styled.p`
  margin-left: 30px;
  margin-top: 20px;
  color: #fff;
  @media (max-width: 1080px) {
    margin-left: 0;
  }
`
let A = styled.a`
  font-size: 18px;
  line-height: 22px;
  color: #fff5f5;
  cursor: pointer;
`
