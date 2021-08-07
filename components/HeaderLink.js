import styled from 'styled-components'
import Link from 'next/link'

export const HeaderLink = ({ option }) => {
  return (
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
  )
}

let ChildNavs = styled.a`
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: flex-end;
  color: #3a4b6d;
  cursor: pointer;
  white-space: nowrap;
`
