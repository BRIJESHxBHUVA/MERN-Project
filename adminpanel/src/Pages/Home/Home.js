import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Profile from '../../Components/Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import Edit from '../Edit/Edit'
import AddCourse from '../../Components/Add Course/AddCourse'


const Home = () => {

  const [profile, setProfile] = useState(false)
  
  return (
    <div>
      
      <Header/>
      <Footer/>
      <Profile/>
      <Edit/>
      <AddCourse/>
           
    </div>
  )
}

export default Home
