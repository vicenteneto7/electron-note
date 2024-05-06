import { Container, DivLogin, DivSearch, InputSeach, LeftBotton, P } from './styles'

import { FaAngleDoubleLeft, FaUserCircle } from 'react-icons/fa'
import { IoSearch } from 'react-icons/io5'
import { WorkSpace } from '../WorkSpace'

export const SideBar = () => {
  return (
    <Container>
      <LeftBotton>
        <FaAngleDoubleLeft color="#797486" style={{ cursor: 'pointer' }} />
      </LeftBotton>
      <DivLogin>
        <FaUserCircle color="#797486" /> <P>Fazer login</P>
      </DivLogin>
      <DivSearch>
        <IoSearch color="#797486" /> <InputSeach placeholder="Busca rápida" />
      </DivSearch>
      <WorkSpace />
    </Container>
  )
}
