import styled from 'styled-components'

const data = [
  {
    id:1,
    name:'HTML5',
    path:'/assets/html.png',
  },
  {
    id:2,
    name:'CSS3',
    path:'/assets/css.png',
  },
  {
    id:3,
    name:'JAVASCRIPT',
    path:'/assets/javascript.png',
  },
  {
    id:4,
    name:'TYPESCRIPT',
    path:'/assets/typescript.svg',
  },
  {
    id:5,
    name:'REACT JS',
    path:'/assets/react.png',
  },
  {
    id:6,
    name:'REACT NATIVE',
    path:'/assets/react-native.png',
  },
  {
    id:7,
    name:'VUE JS',
    path:'/assets/vue.png',
  },
  {
    id:8,
    name:'NODE JS',
    path:'/assets/node.png',
  },
  {
    id:9,
    name:'EXPRESS JS',
    path:'/assets/expressjs.svg',
  },
  {
    id:10,
    name:'SOCKET.IO',
    path:'/assets/socketio.svg',
  },
  {
    id:11,
    name:'GIT',
    path:'/assets/git.png',
  },
  {
    id:12,
    name:'POSTGRESQL',
    path:'/assets/postgresql.svg',
  },
  {
    id:13,
    name:'MYSQL',
    path:'/assets/mysql.svg',
  },
  {
    id:14,
    name:'MONGODB',
    path:'/assets/mongodb.svg',
  },
  {
    id:15,
    name:'FIREBASE',
    path:'/assets/firebase.svg',
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
              <StyledImg src={e.path} />
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

const StyledImg = styled.img`
  width: 6em;
  min-width: 6em;
  @media (max-width: 400px) {
    width: 4em;
    min-width: 4em;
  }
`