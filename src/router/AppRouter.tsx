import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { SkillsPage } from '../pages/SkillsPage'

export const AppRouter = () => {
  return (
    <Routes>

        <Route path='/home'   element={ <HomePage /> } />
        <Route path='/about'  element={ <AboutPage /> } />
        <Route path='/skills' element={ <SkillsPage /> } />
        <Route path='/projects' element={ <ProjectsPage /> } />

        <Route path='/' element={ <Navigate to={'/home'} /> } />
        
    </Routes>
  )
}
