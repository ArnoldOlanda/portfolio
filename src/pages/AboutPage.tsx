import styled from "styled-components";
import profileImage from "../../public/assets/profile.jpg";

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    h2 {
        font-size: 35px;
    }
    @media (max-width: 500px) {
        padding-top: 30px;
        h2 {
            font-size: 30px;
        }
    }
`;
const Content = styled.div`
    width: 80%;
    min-width: 300px;
    min-height: 550px;
    padding: 10px;
    display: flex;
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        width: 80%;
        min-height: 80vh;
    }

    @media (max-width: 500px) {
        width: 100%;
        min-height: 70vh;
    }
`;
const LeftPanel = styled.div`
    width: 50%;
    line-height: 1.8em;
    font-size: 20px;
    font-weight: 300;
    padding: 20px;
    display: flex;
    align-items: center;
    @media (max-width: 1000px) {
        width: 100%;
    }

    @media (max-width: 500px) {
        p {
            font-size: 16px;
            line-height: 1.6rem;
        }
    }
`;
const RightPanel = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 50%; */
    img {
        width: 55%;
        height: 80%;
        object-fit: contain;
    }

    @media (max-width: 1000px) {
        width: 100%;
        img {
            width: 60%;
        }
    }
`;

export const AboutPage = () => {
    return (
        <Container id="about-section">
            <h2>About me</h2>
            <Content className="animate__animated animate__fadeIn">
                <LeftPanel>
                    <p>
                        Hello, my name is Arnold and I'm a fullstack Javascript
                        developer. I've been passionate about programming for 4
                        years, some of my hobbies are reading, playing video
                        games, watching anime and riding my bike. I have done
                        several projects both personal and for the university,
                        currently I have finished my degree in Systems
                        Engineering and I am looking for my first job. I
                        consider myself a productive person who is adaptable and
                        eager to learn something new every day.
                    </p>
                </LeftPanel>
                <RightPanel>
                    <img
                        src={profileImage}
                        alt=""
                        className="animate__animated animate__fadeIn"
                    />
                </RightPanel>
            </Content>
        </Container>
    );
};
