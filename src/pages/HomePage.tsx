import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'



export const HomePage = () => {

    return (
        <Container>

            <Content>
                <LeftContent
                    className='animate__animated animate__fadeIn'
                >
                    <h1>Hi! My Name is Arnold </h1>
                    <span>Frontend/Backend Developer</span>
                </LeftContent>
                <RightContent>
                    <StyledImg
                        src={'./assets/developer.jpg'}
                        alt="developer image"
                        className='animate__animated animate__fadeIn'
                    />
                </RightContent>
            </Content>


            <SocialNetworkContainer
                className='animate__animated animate__fadeIn'
            >
                <SocialNetwork 
                href='https://www.facebook.com/arnolanthony.olandamunoz/'
                target='_blank'
                >
                    <BsFacebook />
                </SocialNetwork>
                <SocialNetwork
                href='https://www.linkedin.com/in/arnold-olanda-61b671209/'
                target='_blank'
                >
                    <BsLinkedin />
                </SocialNetwork>
                <SocialNetwork
                href='https://twitter.com/z4kvt4?t=kkSSeTKapVFyXOEOYILhhg&s=08'
                target='_blank'
                >
                    <BsTwitter />
                </SocialNetwork>
                <SocialNetwork
                href='https://github.com/ArnoldOlanda'
                target='_blank'
                >
                    <BsGithub />
                </SocialNetwork>
            </SocialNetworkContainer>

        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
`

const SocialNetworkContainer = styled.div`
    height: 60px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    @media (max-width: 400px){
        width: 80%;
        bottom:10px;
        right: 10px;
    }
`
const SocialNetwork = styled.a`
    background-color: #1f1f1f;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transition: all .5s ease;
    font-size: 25px;
    
    &:hover{
        background-color: #3b3b3b;
    }
`

const Content = styled.div`
    box-sizing: border-box;
    padding: 10px;
    height: 80vh;
    display: flex;
    color: #fff;
    margin: 0 50px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 1300px;
    @media (max-width: 900px){
        flex-direction: column;
        padding: 0px;
        margin: 10px;
    }
`
const LeftContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 50px;
    padding-left: 40px;
    padding-right: 40px;
    h1{
        font-size: 5em;
        font-weight: 800;
    }
    span{
        margin-top: 15px;
        font-size: 1.6em;
        font-weight: 100;
    }
    @media (max-width: 1000px){
        width: 100%;
        h1{
            font-size: 3em;
        }
        h3{
            font-size: 1.5em;
        }   
    }
`

const RightContent = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    @media (max-width: 1000px){
        width: 100%;
    }
`
const StyledImg = styled.img`
    min-width: 25em;
    width: 40em;
    border-radius: 10px;
    @media (max-width: 1000px){
        width: 80%;
    }
    @media (max-width: 400px){
        min-width: 100%;
    }

`