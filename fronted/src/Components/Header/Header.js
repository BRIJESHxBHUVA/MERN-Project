import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    
      <a class="navbar-brand d-flex align-items-center px-4 px-lg-5" href="#">
        <h2 className='m-0' style={{color: '#06bbcc'}}>
        <i class="fa-solid fa-book me-3"></i>
        eLEARNING
        </h2>
      </a>
      <button class="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto p-4 ">
          
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">COURSES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACT</a>
          </li>
          
        </ul>
       
      </div>
   
  </nav>
  )
}

export default Header
