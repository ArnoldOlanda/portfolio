import styled from "styled-components";
import { ProjectItem } from "../components/ProjectItem";

import repetsImage from "../../public/assets/repets-app.png";
import pokeAppImage from "../../public/assets/poke-app-1.png";
import youtubeRedesignImage from "../../public/assets/youtube-redesign.png";
import todoAppImage from "../../public/assets/todo-app.png";
import chatMernImage from "../../public/assets/chat-app.png";
import peliculasAppImage from "../../public/assets/peliculas-app.png";

const data = [
    {
        url: chatMernImage,
        title: "Chat app",
        description:
            "Aplicativo web para crear conversaciones y chatear con amigos",
        sourceUri: "https://github.com/ArnoldOlanda/chat-mern-frontend",
        visitPageUri: "https://chat-mern-z4kvt4.netlify.app/",
        tags: ["React", "Typescript", "SocketIo", "ExpressJs", "MongoBD"],
    },
    {
        url: repetsImage,
        title: "REPETS Mobile app",
        description:
            "Aplicacion mobile para reserva de alojamiento para mascotas",
        sourceUri: "https://github.com/ArnoldOlanda/repetsApp",
        visitPageUri: "https://repets.netlify.app",
        tags: [
            "React Native",
            "Redux Tool Kit",
            "SocketIo",
            "ExpressJs",
            "MongoBD",
        ],
    },
    {
        url: pokeAppImage,
        title: "Pokemons web app",
        description: "Pagina web para mostrar pokemones consumiendo pokeapi",
        sourceUri: "https://github.com/ArnoldOlanda/poke-app",
        visitPageUri: "https://poke-app-ardev.netlify.app",
        tags: ["React", "Typescript", "Styled Components"],
    },
    {
        url: youtubeRedesignImage,
        title: "Youtube redesign",
        description:
            'Pagina web inspirada en el rediseño de youtube cuyo autor es "sa3duix" ',
        sourceUri: "https://github.com/ArnoldOlanda/youtube-redesign",
        visitPageUri: "https://youtube-redesign-z4kvt4.netlify.app/",
        tags: ["React", "Typescript", "Styled Components"],
    },
    {
        url: todoAppImage,
        title: "Todo app",
        description:
            "Aplicacion de tareas basica para listar, registrar, actualizar, eliminar tareas",
        sourceUri: "https://github.com/ArnoldOlanda/todo-app-js-frontend",
        visitPageUri: "https://todo-app-z4kvt4.netlify.app",
        tags: ["Html", "Css", "Typescript", "ExpressJs", "MongoBD"],
    },
    {
        url: peliculasAppImage,
        title: "Peliculas app",
        description:
            'Aplicacion de peliculas que consume la API de "themoviedb" para consultar las peliculas en cartelera, proximas a estrenarse, etc',
        sourceUri: "https://github.com/ArnoldOlanda/peliculas_app",
        visitPageUri: "https://movies-app-artidev.netlify.app/",
        tags: ["React", "Typescript", "Tailwind Css"],
    },
];

export const ProjectsPage = () => {
    return (
        <Container id="projects-section">
            <h1 className="animate__animated animate__fadeIn">My Projects</h1>
            {data.map((e) => (
                <ProjectItem key={e.url} data={e} />
            ))}
        </Container>
    );
};

const Container = styled.div`
    color: white;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    gap: 50px;

    @media screen and (max-width: 1000px) {
        padding: 40px;
    }

    @media screen and (max-width: 720px) {
        flex-direction: column;
        padding: 20px;
    }
`;
