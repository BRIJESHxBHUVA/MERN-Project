import React, { useEffect, useState } from 'react'
import './Profile.css'
import {useNavigate} from 'react-router-dom'
import {IMG_URL} from '../../Redux/adminSlice'

const Profile = ({profile, setProfile}) => {

  const [data, setData] = useState({})
  const navigate = useNavigate()
  useEffect(()=>{
    const storedUser = sessionStorage.getItem('admin')
    if(storedUser){
      setData(JSON.parse(storedUser))
    }
  },[])

  const HandleLogout = ()=> {
    navigate('/')
    sessionStorage.clear('admin')
    sessionStorage.clear('adminId')
    sessionStorage.clear('adminToken')
  }

  const HandleEdit = ()=> {
    navigate('edit')
    setProfile(false)
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
            <img src={`${IMG_URL}/Images/Admin/${data.image}`} alt="" />
            <h4>{data.name}</h4>
        </div>
        <div className="profile-body">
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Created AT: {data.createdAT}</p>
        </div>
        <div className="profile-footer">
            <button style={{backgroundColor: 'skyblue', color: 'white'}} onClick={HandleEdit}>EDIT</button>
            <button style={{background: '#c74f4f', color: 'white'}} className='del'>DELETE</button>
            <button style={{background: 'black', color: 'white'}} onClick={HandleLogout}>LOGOUT</button>
        </div>
      </div>
    </div>
     
    : ""

  )
}

export default Profile
