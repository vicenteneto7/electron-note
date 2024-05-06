import { Container, P, SectionNav1, SectionNav2, Space } from './styles'

import { FaCode, FaRegTrashAlt } from 'react-icons/fa'

export const Header = () => {
  return (
    <Container>
      <SectionNav1>
        <P>
          <FaCode color='#E91E63' />
          Estrutura técnica
        </P>
        <Space>/... /</Space>
        <P>Back-end</P>
        <Space>/</Space>
        <P>Untlited</P>
      </SectionNav1>
      <SectionNav2>
        <P>
          <FaRegTrashAlt />
          Apagar
        </P>
      </SectionNav2>
    </Container>
  )
}
