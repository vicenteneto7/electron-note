import { Docs } from '../../components/DocsBar'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/Sidebar'
import { Container, Section } from './styles'

export function Home() {
  return (
    <Container>
      <SideBar />
      <Section>
        <Header />
        <Docs />
      </Section>
    </Container>
  )
}
