import { Container, DivLogin, DivSearch, InputSeach, LeftBotton, P } from './styles'

import { FaAngleDoubleLeft, FaUserCircle  } from 'react-icons/fa'
import { IoSearch } from "react-icons/io5";


export const SideBar = () => {
  return (
    <Container>
      <LeftBotton>
        <FaAngleDoubleLeft style={{ cursor: 'pointer' }} />
      </LeftBotton>
      <DivLogin>
        <FaUserCircle /> Fazer login
      </DivLogin>
      <DivSearch>
        <IoSearch/> <InputSeach placeholder='Busca rápida' />
      </DivSearch>
    </Container>
  )
}
