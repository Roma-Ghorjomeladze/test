import styled from 'styled-components'
import { useCMS } from 'tinacms'
import { navigation } from '../config/navigation'
import { EditLink } from './EditLink'
import Link from 'next/link'

export default function Footer() {
  const cms = useCMS()
  let date = new Date()

  return (
    <FooterWrapper>
      <Footer_>
        <Cont>
          {Object.values(navigation).map(nav => {
            return (
              <NavItem key={nav.index}>
                <NavHeaderCont>
                  {nav.default.isNotLink ? (
                    <NavHeader>{nav.default.label}</NavHeader>
                  ) : (
                    <Link
                      href={{
                        pathname: nav.default.href,
                      }}
                    >
                      <a>
                        <NavHeader>{nav.default.label}</NavHeader>
                      </a>
                    </Link>
                  )}
                </NavHeaderCont>
                <NavBody>
                  {nav.options.map(subNav => {
                    return (
                      <div key={subNav.label}>
                        <SubNavContainer>
                          <Link
                            href={{
                              pathname: subNav.isNotLink ? '/' : subNav.href,
                            }}
                          >
                            <a>
                              <A>{subNav.label}</A>
                            </a>
                          </Link>
                        </SubNavContainer>
                        {subNav.options &&
                          subNav.options.map(sn => {
                            return (
                              <SubNavContainer key={sn.label}>
                                <Link
                                  href={{
                                    pathname: sn.isNotLink ? '/' : sn.href,
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
          <Img className="logo" src={'/static/logos/logo.png'} alt="Logo" />
        </Cont>
        <CopyRight>{`Copyright © ${date.getFullYear()} Entdeckungsraum`}</CopyRight>
        <EditLink cms={cms} />
      </Footer_>
    </FooterWrapper>
  )
}
const FooterWrapper = styled.div`
  width: 100%;
  background-color: #8a3848;
`
const Cont = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`

const Footer_ = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 65px 80px;
  background-color: #8a3848;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
`

const NavHeader = styled.h2`
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #fff5f5;
  cursor: pointer;
  margin-bottom: 2px;
  font-family: 'Sana';
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
  width: 137px;
  height: 137px;
  @media (max-width: 1080px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 768) {
    width: 80px;
    height: 80px;
  }
`
let CopyRight = styled.p`
  margin-left: 30px;
  margin-top: 20px;
  color: #fff;
  font-family: 'Quicksand';
  @media (max-width: 1080px) {
    margin-left: 0;
  }
`
let A = styled.span`
  font-size: 18px;
  line-height: 22px;
  color: #fff5f5;
  cursor: pointer;
  font-family: 'Sana';
`
