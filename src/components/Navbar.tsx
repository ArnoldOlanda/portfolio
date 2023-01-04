import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoCloseSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi'

const data = [
    {
        path:'/home',
        label:'Home'
    },
    {
        path:'/projects',
        label:'My Projects'
    },
    {
        path:'/skills',
        label:'Skills'
    },
    {
        path:'/about',
        label:'About me'
    }
]

export const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true);

    return (
        <>
            <Container collapsed={collapsed}>
                <div>
                    <h3>Portfolio</h3>
                    <button
                    onClick={()=> setCollapsed(true) }
                    >
                        <IoCloseSharp size={20} color='white' />
                    </button>
                </div>
                <Menu className="">
                    {
                        data.map(e=>(
                            <MenuItem 
                            onClick={()=> setCollapsed(true)}
                            to={e.path}
                            >
                                { e.label }
                            </MenuItem>
                        ))
                    }
                </Menu>
            
            </Container>
            <HamburgerContainer>
                <GiHamburgerMenu 
                onClick={()=> setCollapsed(false)} 
                color='white' size={28} 
                />
            </HamburgerContainer>
        </>
    )
}

interface StyledContainerProps {
    collapsed: boolean;
}

const Container = styled.div<StyledContainerProps>`
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 1em;
    color: #e6e6e6;
    align-items: center;
    transition: .3s ease-in-out ;

    div:nth-child(1){
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        h3{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            flex: 1;
        }
    }

    button{
        display: none;
        border: none;
        background-color: transparent;
        @media screen and (max-width: 500px){
            display: initial;
        }
    }
    
    @media screen and (max-width: 500px){
        position: fixed;
        z-index: 100;
        background-color: #131111;
        height: 50vh;
        flex-direction: column;
        transform:${({collapsed})=> collapsed ? 'translateY(-100%)' : 'translateY(0)'};
    }
`
const Menu = styled.div`
    width: 350px;
    height: 100%;
    margin-left: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all .3s ease;
    @media screen and (max-width: 500px){
        flex-direction: column;
    }
    
`
const MenuItem = styled(Link)`
    color: gray;
    text-decoration: none;
    &:hover{
        color: #dbdbdb;
        cursor: pointer;
    }
`
const HamburgerContainer = styled.div`
    display: none;
    @media screen and (max-width: 500px){
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 90;
        display: initial;
    }
`