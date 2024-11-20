import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Profile from '../../Components/Profile/Profile'
import { Route, Routes } from 'react-router-dom'
import Edit from '../Edit/Edit'
import AddCourse from '../../Components/Add Course/AddCourse'
import ViewCourse from '../ViewCourse/ViewCourse'
import AllUser from '../AllUser/AllUser'


const Home = () => {

  const [profile, setProfile] = useState(false)
  
  return (
    <div>
      <Header setProfile={setProfile}/>
      <Profile profile={profile} setProfile={setProfile}/>
      <Routes>
        <Route path='edit' element={<Edit/>} />
        <Route path='addcourse' element={<AddCourse/>} />
        <Route path='viewcourse' element={<ViewCourse/>} />
        <Route path='allusers' element={<AllUser/>} />
      </Routes>
      <Footer/>
      
           
    </div>
  )
}

export default Home
