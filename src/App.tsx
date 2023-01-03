import styled from 'styled-components'
import { Navbar } from './components/Navbar'
import { NetworkStatusBar } from './components/NetworkStatusBar'
import { AppRouter } from './router/AppRouter'

const Container = styled.div`
  background-color: #141414;
  background-image: url('/assets/developer.jpg');
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
`
const BlurFilter = styled.div`
    background-color: #0c0c0cf2;
    width: 100%;
    min-height: 100vh;
`

function App() {

  return (
    <div>
      <NetworkStatusBar />
      <Container>
        <BlurFilter>
          <Navbar />
          <AppRouter />
        </BlurFilter>
      </Container>
    </div>
  )
}

export default App
