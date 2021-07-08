import styled from 'styled-components'

export const EditLink = ({ cms }) => {
  const handleToggle = () => {
    cms.toggle()
  }

  return (
    <Button onClick={() => handleToggle()}>
      {cms.enabled ? 'exit' : 'edit'}
    </Button>
  )
}

let Button = styled.div`
  z-index: 10;
  background-color: #8a3848;
  color: #974152;
  outline: none;
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
  cursor: pointer;
`
