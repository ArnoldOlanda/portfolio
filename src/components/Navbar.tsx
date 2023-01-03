import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 1em;
    color: #e6e6e6;
    align-items: center;
    h3{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
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
`
const MenuItem = styled(Link)`
    color: gray;
    text-decoration: none;
    &:hover{
        color: #dbdbdb;
        cursor: pointer;
    }
`

export const Navbar = () => {
  return (
    <Container>
        <h3>Portfolio</h3>
        <Menu className="">
            <MenuItem to={'/home'}>Home</MenuItem>
            <MenuItem to={'/projects'}>My projects</MenuItem>
            <MenuItem to={'/skills'}>Skills</MenuItem>
            <MenuItem to={'/about'}>About me</MenuItem>
        </Menu>
    </Container>
  )
}
