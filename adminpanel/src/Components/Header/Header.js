import React, { useEffect, useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {IMG_URL} from '../../Redux/adminSlice'

const Header = ({setProfile}) => {

  const [data, setData] = useState({})

  useEffect(()=>{
    const storedUser = sessionStorage.getItem('admin')
    if(storedUser){
      setData(JSON.parse(storedUser))
    }
  },[])

  
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    
      <a className="navbar-brand d-flex align-items-center px-4 px-lg-5" href="#">
        <h2 className='m-0' style={{color: '#06bbcc'}}>
        <i className="fa-solid fa-book me-3"></i>
        eLEARNING
        </h2>
      </a>

      <div className="profile me-3 second-profile" onClick={()=> setProfile(true)}>
        <img src={`${IMG_URL}/Images/Admin/${data.image}`} alt="User" />
      </div>


      <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto p-4 ">
          
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="">HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="allusers">USERS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="viewcourse">COURSES</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="addcourse">ADD COURSES</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT</a>
          </li>
          
        </ul>
       
      </div>

      <div className="profile me-3" onClick={()=> setProfile(true)}>
        <img src={`${IMG_URL}/Images/Admin/${data.image}`} alt="User" />
      </div>
   
  </nav>
  )
}

export default Header
