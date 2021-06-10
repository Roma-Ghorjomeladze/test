import styled from 'styled-components'
import { navigation } from '../config/navigation'

export default function Footer() {
  return (
    <Footer_>
      {Object.values(navigation).map(nav => {
        return (
          <NavItem>
            <NavHeaderCont>
              <NavIndex>{nav.index}</NavIndex>
              <NavHeader>{nav.default.label}</NavHeader>
            </NavHeaderCont>
            <NavBody>
              {nav.options.map(subNav => {
                return (
                  <SubNavContainer>
                    <NavIndexSmall>
                      {nav.index}.{subNav.index}
                    </NavIndexSmall>
                    <SubNavTitle>{subNav.label}</SubNavTitle>
                  </SubNavContainer>
                )
              })}
            </NavBody>
          </NavItem>
        )
      })}
    </Footer_>
  )
}

const Footer_ = styled.div`
  width: 100%;
  padding: 65px 80px;
  background-color: #8a3848;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
`

const NavHeader = styled.h2`
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #fff5f5;
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
const NavItem = styled.div``
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
