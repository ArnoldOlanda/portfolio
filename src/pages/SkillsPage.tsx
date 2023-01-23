import styled from 'styled-components'

import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import typescript from '../../assets/typescript.svg'
import react from '../../assets/react.png'
import reactNative from '../../assets/react-native.png'
import vue from '../../assets/vue.png'
import node from '../../assets/node.png'
import expressjs from '../../assets/expressjs.svg'
import socketio from '../../assets/socketio.svg'
import git from '../../assets/git.png'
import postgresql from '../../assets/postgresql.svg'
import mysql from '../../assets/mysql.svg'
import mongodb from '../../assets/mongodb.svg'
import firebase from '../../assets/firebase.svg'
import tailwind from '../../assets/tailwind.svg'

const data = [
  {
    id:1,
    name:'HTML5',
    path:html,
  },
  {
    id:2,
    name:'CSS3',
    path:css,
  },
  {
    id:3,
    name:'JAVASCRIPT',
    path:javascript,
  },
  {
    id:4,
    name:'TYPESCRIPT',
    path:typescript,
  },
  {
    id:5,
    name:'REACT JS',
    path:react,
  },
  {
    id:6,
    name:'REACT NATIVE',
    path:reactNative,
  },
  {
    id:7,
    name:'VUE JS',
    path:vue,
  },
  {
    id:8,
    name:'TAILWIND CSS',
    path:tailwind,
  },
  {
    id:9,
    name:'NODE JS',
    path:node,
  },
  {
    id:10,
    name:'EXPRESS JS',
    path:expressjs,
  },
  {
    id:11,
    name:'SOCKET.IO',
    path:socketio,
  },
  {
    id:12,
    name:'GIT',
    path:git,
  },
  {
    id:13,
    name:'POSTGRESQL',
    path:postgresql,
  },
  {
    id:14,
    name:'MYSQL',
    path:mysql,
  },
  {
    id:15,
    name:'MONGODB',
    path:mongodb,
  },
  {
    id:16,
    name:'FIREBASE',
    path:firebase,
  }
]


export const SkillsPage = () => {
  return (
    <Container>
      <h2>My Skills</h2>
      <span style={{ fontSize:'18px', marginBottom:'20px' }}>
        Currently I have skills and management of the following web and mobile technologies.
      </span>
      <CardContainer className='animate__animated animate__fadeIn'>
        {
          data.map( e =>(
            <Card key={ e.id }> 
              <ContainerImg>
                <StyledImg src={e.path} />
              </ContainerImg>
              <div>
                <span>{ e.name }</span>
              </div> 
            </Card>
          ))
        }
      </CardContainer>
    </Container>
  )
}

const Container = styled.div`
  color: #fff;
  padding: 10px;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    margin: 40px auto;
    font-size: 35px;
  }
`
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
`

const Card = styled.div`
  background-color: #1a1a1a;
  width: 200px;
  height: 200px;
  border-radius:15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  &:hover{
    transform: translateY(-5px);
  }

  @media (max-width: 400px) {
    width: 150px;
    height: 140px;
    font-size: 14px;
  }
`
const ContainerImg = styled.div`
  width:90%; 
  height:70%;
  display: flex;
  justify-content: center;
  align-items: center;
`


const StyledImg = styled.img`
  width: 6em;
  min-width: 6em;
  @media (max-width: 400px) {
    width: 4em;
    min-width: 4em;
  }
`