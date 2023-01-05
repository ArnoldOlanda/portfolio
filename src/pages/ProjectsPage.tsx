import React, { useState } from 'react'
import styled from 'styled-components'
import { FaChevronRight,FaGithub } from 'react-icons/fa'
import { TbExternalLink } from 'react-icons/tb'
// import 'react-slideshow-image/dist/styles.css'
import repetsImage from '../../assets/repets-app.png'
import pokeAppImage from '../../assets/poke-app-1.png'
import youtubeRedesignImage from '../../assets/youtube-redesign.png'
import todoAppImage from '../../assets/todo-app.png'
import chatMernImage from '../../assets/chat-app.png'

const data = [
  {
    url: chatMernImage,
    title: 'Chat app',
    description:'Aplicativo web para crear conversaciones y chatear con amigos',
    sourceUri:'https://github.com/ArnoldOlanda/chat-mern-frontend',
    visitPageUri: 'https://chat-mern-z4kvt4.netlify.app/',
  },
  {
    url: repetsImage,
    title: 'REPETS Mobile app',
    description:'Aplicacion mobile para reserva de alojamiento para mascotas',
    sourceUri:'https://github.com/ArnoldOlanda/repetsApp',
    visitPageUri:'https://repets.netlify.app'
  },
  {
    url: pokeAppImage,
    title: 'Pokemons web app',
    description:'Pagina web para mostrar pokemones consumiendo pokeapi',
    sourceUri:'https://github.com/ArnoldOlanda/poke-app',
    visitPageUri:'https://poke-app-ardev.netlify.app'
  },
  {
    url: youtubeRedesignImage,
    title: 'Youtube redesign',
    description:'Pagina web inspirada en el rediseño de youtube cuyo autor es "sa3duix" ',
    sourceUri:'https://github.com/ArnoldOlanda/youtube-redesign',
    visitPageUri:'https://youtube-redesign-z4kvt4.netlify.app/'
  },
  {
    url: todoAppImage,
    title: 'Todo app',
    description:'Aplicacion de tareas basica para listar, registrar, actualizar, eliminar tareas',
    sourceUri:'https://github.com/ArnoldOlanda/todo-app-js-frontend',
    visitPageUri:'https://todo-app-z4kvt4.netlify.app'
  },
];


export const ProjectsPage = () => {

  const [currentPathImage, setCurrentPathImage] = useState<string>(data[0].url);
  const [currentDescription, setCurrentDescription] = useState<string>(data[0].description);
  const [sourceCodeLink, setSourceCodeLink] = useState<string>(data[0].sourceUri);
  const [visitPageLink, setVisitPageLink] = useState<string>(data[0].visitPageUri);

  return (
    <Container>
      
      <Content>
        <h1 className='animate__animated animate__fadeIn'>My Projects</h1>
        <ListContainer className='animate__animated animate__fadeIn'>
          {
            data.map(e=>(
              <div onClick={()=> {
                setCurrentPathImage(e.url)
                setCurrentDescription(e.description)
                setSourceCodeLink(e.sourceUri)
                setVisitPageLink(e.visitPageUri)
              }} >{ e.title } <FaChevronRight /></div>
            ))
          }
        </ListContainer>
        <p>{ currentDescription }</p>
      </Content>

      <ProjectView className='animate__animated animate__fadeIn'>
        {
          currentPathImage.length > 1
          ? <img 
            className='animate__animated animate__fadeIn' 
            src={currentPathImage} alt="img" />

          : 'Select a project of the list'
        }

        {
          currentPathImage !== ''
          && ( <div>
                <a href={ sourceCodeLink } target='_blank'><FaGithub size={22}/><span>Source code</span></a>
                <a href={ visitPageLink } target='_blank'><TbExternalLink size={22}/><span>Visit</span></a>
              </div>)
        }
      </ProjectView>

    </Container>
  )
}

const Container = styled.div`
  color:white;
  width: 100%;
  height: 90vh;
  display: flex;
  padding: 100px;
  gap: 50px;

  @media screen and (max-width: 1000px){
    padding: 40px;
  }

  @media screen and (max-width: 720px){
    flex-direction: column;
    padding: 20px;
  }

  
`

const Content = styled.div`
  width: 30%;
  position: relative;
  p{
    font-size:20px;
    margin-top:50px;
  }
  @media screen and (max-width: 720px){
    h1{
      font-size: 20px;
    }
    width: 100%;
    p{
      font-size: 15px;
      margin-top: 10px;
    }
  }
`

const ListContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  div{
    background-color: #161616;
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    transition: all .2s ease-in-out;
    cursor: pointer;
  }
  div:hover{
    background-color: #222222;
    transform: translateX(5px);
  }
  div:active{
    transform: scale(0.95);
  }

  ::-webkit-scrollbar{
    background-color: transparent;
    height: 5px;
  }

  ::-webkit-scrollbar-track{
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #4d4d4d;
    border-radius: 5px;
  }


  @media screen and (max-width: 1000px){
    div{
      font-size: 15px;
    }
  }

  @media screen and (max-width: 720px){
    margin-top: 10px;
    flex-direction: row;
    overflow: auto;
    
    div{
      min-width: 120px;
      height: 60px;
      font-size: 14px;
      margin-right: 15px;
      text-align: center;
      justify-content: center;
      svg{
        display:none;
      }
    }
    div:hover{
      transform: none;
    }
  }

`

const ProjectView = styled.div`
  border-radius: 10px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    width:90%;
    height:90%;
    border-radius:10px;
    object-fit:contain;
  }

  div{
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: center;
    gap: 10px;
    a{
      text-decoration: none;
      margin: auto;
      width: 180px;
      height: 40px;
      border-radius: 10px;
      padding: 5px;
      border: none;
      outline: none;
      background-color: #323e80;
      color:#fff;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      span{
        margin-left: 10px;
      }
      &:hover{
        background-color: #394aa7;
      }
    }
  }

  @media screen and (max-width: 1000px){
    width: 80%;
    img{
      width:80%;
      height:40%;
      border-radius:10px;
      object-fit:cover;
    }
    div{
      width: 80%;
      gap: 10px;
    }
  }

  @media screen and (max-width: 720px){
    min-width: 100%;
    height: 55vh;
    justify-content: flex-start;
    img{
      width: 100%;
      height:70%;
      border-radius:10px;
      object-fit:cover;
    }

    div{
      width: 90%;
      height: 20%;
    }
  }
  @media screen and (max-width: 420px){
    img{
      width: 100%;
      height: 50%;
    }
  }

`