import styled from "styled-components";

import skillData from "../data/skills.json";

export const SkillsPage = () => {
    return (
        <Container id="skills-section">
            <h2>My Skills</h2>
            <span style={{ fontSize: "18px", marginBottom: "20px" }}>
                Currently I have skills and management of the following web and
                mobile technologies.
            </span>
            <CardContainer className="animate__animated animate__fadeIn">
                {skillData.map((e) => (
                    <Card key={e.id}>
                        <ContainerImg>
                            <StyledImg src={`/assets/${e.filename}`} />
                        </ContainerImg>
                        <div>
                            <span>{e.name}</span>
                        </div>
                    </Card>
                ))}
            </CardContainer>
        </Container>
    );
};

const Container = styled.div`
    color: #fff;
    padding: 10px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin: 40px auto;
        font-size: 35px;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    width: 80%;
    /* height: 60vh; */
    @media (max-width: 900px) {
        width: 100%;
    }
    @media (max-width: 400px) {
        gap: 15px;
    }
`;

const Card = styled.div`
    background-color: #1a1a1a;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 400px) {
        width: 150px;
        height: 140px;
        font-size: 14px;
    }
`;

const ContainerImg = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImg = styled.img`
    width: 6em;
    min-width: 6em;
    @media (max-width: 400px) {
        width: 4em;
        min-width: 4em;
    }
`;
