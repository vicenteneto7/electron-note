import { Container, Container2, Container3, P, WorkSpaceP } from './styles'

import { BsThreeDots } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'

export const WorkSpace = () => {
  return (
    <Container>
      <Container2>
        <WorkSpaceP>WORKSPACE</WorkSpaceP>
        <P>
          Untlited <BsThreeDots />
        </P>

        <P>
          Discover
          <BsThreeDots />
        </P>

        <P>
          Ignite
          <BsThreeDots />{' '}
        </P>

        <P>
          React
          <BsThreeDots />{' '}
        </P>
      </Container2>
      <Container3>
        <IoMdAdd color="#797486" /> <P>Create new page</P>
      </Container3>
    </Container>
  )
}
