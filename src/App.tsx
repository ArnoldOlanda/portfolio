import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import { NetworkStatusBar } from "./components/NetworkStatusBar";

import developerImage from "../public/assets/developer.jpg";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SkillsPage } from "./pages/SkillsPage";
interface ContainerProps {
    background: string;
}

const Container = styled.div<ContainerProps>`
    background-color: #141414;
    background-image: url(${({ background }) => background});
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
`;
const BlurFilter = styled.div`
    background-color: #0c0c0cf2;
    width: 100%;
    min-height: 100vh;
`;

const Content = styled.div`
    scroll-behavior: smooth;
`;

function App() {
    return (
        <div>
            <NetworkStatusBar />
            <Container background={developerImage}>
                <BlurFilter>
                    <Navbar />
                    <Content>
                        <HomePage />
                        <AboutPage />
                        <ProjectsPage />
                        <SkillsPage />
                    </Content>
                </BlurFilter>
            </Container>
        </div>
    );
}

export default App;
