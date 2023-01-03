import styled from 'styled-components'
import { Navbar } from './components/Navbar'
import { NetworkStatusBar } from './components/NetworkStatusBar'
import { AppRouter } from './router/AppRouter'

import developerImage from '../assets/developer.jpg'
interface ContainerProps{
  background: string;
}

const Container = styled.div<ContainerProps>`
  background-color: #141414;
  background-image: url(${({background})=> background });
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
      <Container background={developerImage}>
        <BlurFilter>
          <Navbar />
          <AppRouter />
        </BlurFilter>
      </Container>
    </div>
  )
}

export default App
