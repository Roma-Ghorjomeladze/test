import styled from 'styled-components'
import { useCMS } from 'tinacms'
import { navigation } from '../config/navigation'
import { EditLink } from './EditLink'

export default function Footer() {
  const cms = useCMS()
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
                  <div>
                    <SubNavContainer>
                      <NavIndexSmall>
                        {nav.index}.{subNav.index}
                      </NavIndexSmall>
                      <SubNavTitle>{subNav.label}</SubNavTitle>
                    </SubNavContainer>
                    {subNav.options &&
                      subNav.options.map(sn => {
                        return (
                          <SubNavContainer>
                            <NavIndexSmall>
                              {nav.index}.{subNav.index}
                              {sn.index}
                            </NavIndexSmall>
                            <SubNavTitle>{sn.label}</SubNavTitle>
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
      <NavItem>
        <img className="logo" src={'/static/logos/logo.svg'} alt="Logo" />
      </NavItem>
      <EditLink cms={cms} />
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
