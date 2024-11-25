import React, { useEffect, useState } from 'react'
import './Profile.css'
import dp from '../../Images/carousel-1.jpg'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { editUser, IMAGE_URL } from '../../Redux/userSlice'

const Profile = ({setProfile ,profile}) => {

  const [data, setData] = useState({})

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    const storedUser = sessionStorage.getItem('User')
    if(storedUser){
      setData(JSON.parse(storedUser))
    }
  },[])

  const handleLogout = ()=> {
    sessionStorage.clear('userToken')
    sessionStorage.clear('userId')
    sessionStorage.clear('User')
    navigate('/')
  }

  const handleEdit = ()=> {
    dispatch(editUser())
    navigate('/user-editpage')
  }

  return (

    profile ? 
      
      <div className='profile-page'>
      <div className="profile-box">
        <div className="close" onClick={()=> setProfile(false)}>
      <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="delete">
        <i class="fa-solid fa-trash"></i>
        </div>


        <div className="profile-header">
            <img src={`${IMAGE_URL}/Images/User/${data.image}`} alt="" />
            <h4>{data.name}</h4>
        </div>
        <div className="profile-body">
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Created AT: {data.createdAT}</p>
        </div>
        <div className="profile-footer">
            <button style={{backgroundColor: 'skyblue', color: 'white'}} onClick={handleEdit}>EDIT</button>
            <button style={{background: '#c74f4f', color: 'white'}} className='del'>DELETE</button>
            <button style={{background: 'black', color: 'white'}} onClick={handleLogout}>LOGOUT</button>
        </div>
      </div>
    </div>
     
     : ""
     
    
  )
}

export default Profile
