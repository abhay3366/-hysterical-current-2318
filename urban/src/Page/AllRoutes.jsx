import React from 'react'
import { Routes, Route } from "react-router-dom"
import Blog from '../Component/Blog'
import HelpCenter from './HelpCenter'
import Home from './Home'
import Login from './Login'
import RegisteredAndProffessional from './RegisteredAndProffessional'

function AllRoutes() {
  return (
   <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/registerdProfessional' element={<RegisteredAndProffessional/>}></Route>
        <Route path='/helpCenter' element={<HelpCenter/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
   </Routes>
  )
}

export default AllRoutes