import React from "react";
import styled from "styled-components";
import { FaChevronRight, FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import pokeAppImage from "../../public/assets/poke-app-1.png";

interface Props {
    data: {
        url: string;
        title: string;
        description: string;
        sourceUri: string;
        visitPageUri: string;
        tags: string[];
    };
}

export const ProjectItem = ({ data }: Props) => {
    return (
        <ProjectView className="animate__animated animate__fadeIn">
            <div className="left-panel">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className="tags-container">
                    {data.tags.map((e) => (
                        <span>{e}</span>
                    ))}
                </div>
            </div>
            <div className="right-panel">
                <img
                    className="animate__animated animate__fadeIn"
                    src={data.url}
                    alt="img"
                />

                <div className="links-container">
                    <a href="#" target="_blank">
                        <FaGithub size={22} />
                        <span>Source code</span>
                    </a>
                    <a href="" target="_blank">
                        <TbExternalLink size={22} />
                        <span>Visit</span>
                    </a>
                </div>
            </div>
        </ProjectView>
    );
};

const ProjectView = styled.div`
    width: 60%;
    padding: 10px;
    height: 50vh;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px #383838 solid;
    background-color: #25252583;
    display: flex;

    .left-panel {
        width: 40%;
        height: 100%;
        margin-top: 20px;
        margin-left: 20px;
        .tags-container {
            display: flex;
            gap: 10px;
            margin-top: 20px;
            flex-wrap: wrap;
            span {
                background-color: #2e2e77;
                min-width: 30px;
                padding: 5px;
                border-radius: 5px;
            }
        }
    }

    .right-panel {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .links-container {
        display: flex;
        gap: 20px;
    }

    img {
        width: 90%;
        height: 90%;
        border-radius: 10px;
        object-fit: contain;
    }

    a {
        text-decoration: none;
        margin: auto;
        width: 180px;
        height: 40px;
        border-radius: 10px;
        padding: 5px;
        border: none;
        outline: none;
        background-color: #323e80;
        color: #fff;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        span {
            margin-left: 10px;
        }
        &:hover {
            background-color: #394aa7;
        }
    }

    @media screen and (max-width: 1000px) {
        width: 80%;
        img {
            width: 80%;
            height: 40%;
            border-radius: 10px;
            object-fit: contain;
        }
        div {
            width: 80%;
            gap: 10px;
        }
    }

    @media screen and (max-width: 720px) {
        min-width: 100%;
        height: 55vh;
        justify-content: flex-start;
        img {
            width: 100%;
            height: 70%;
            border-radius: 10px;
            object-fit: contain;
        }

        div {
            width: 90%;
            height: 20%;
        }
    }
    @media screen and (max-width: 420px) {
        img {
            width: 100%;
            height: 50%;
        }
    }
`;
