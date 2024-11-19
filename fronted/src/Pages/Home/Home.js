import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Section1 from '../../Components/Section1/Section1'
import Section2 from '../../Components/Section2/Section2'
import Section3 from '../../Components/Section3/Section3'
import Section4 from '../../Components/Section4/Section4'
import Footer from '../../Components/Footer/Footer'
import Profile from '../../Components/Profile/Profile'

const Home = () => {

  const [profile, setProfile] = useState(false)
  
  return (
    <div>
      <Header setProfile={setProfile}/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
      <Profile setProfile={setProfile} profile={profile}/>
    </div>
  )
}

export default Home
