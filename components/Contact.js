import styled from 'styled-components'
import Link from 'next/link'

export const Contact = props => {
  return (
    <Container>
      <Title>
        {!!props.isLink ? (
          <Link
            key={props.slug}
            href={{
              pathname: `/contacts/${props.slug}`,
              query: { post: props.slug },
            }}
          >
            <A>{props.contact.title}</A>
          </Link>
        ) : (
          props.contact.title
        )}
      </Title>
      <Address>{props.contact.address}</Address>
    </Container>
  )
}

let Container = styled.div`
  width: 100%;
  padding: 100px 0;
`

let Title = styled.h2`
  font-size: 27px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: #000000;
  margin-bottom: 20px;
  font-weight: 400;
  @media (max-width: 1080px) {
    font-size: 17px;
    line-height: 17px;
  }
  @media (max-width: 1080px) {
    font-size: 14px;
    line-height: 14px;
  }
`

let Address = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #000000;
`
let A = styled.a`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #00008b;
  }
`
