import { Header } from '../../components/Header'
import { SideBar } from '../../components/Sidebar'
import { Routes } from '../../routes/routes'
import { Container, Section } from './styles'

export function App() {
  return (
    <Container>
      <SideBar />
      <Section>
        <Header />
        <Routes />
      </Section>
    </Container>
  )
}
