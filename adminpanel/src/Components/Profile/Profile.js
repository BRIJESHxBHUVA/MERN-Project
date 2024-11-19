import React, { useEffect, useState } from 'react'
import './Profile.css'

const Profile = () => {

  const [data, setData] = useState({})

  useEffect(()=>{
    const storedUser = sessionStorage.getItem('User')
    if(storedUser){
      setData(JSON.stringify(storedUser))
    }
  },[])
  console.log(data)

  return (
      
      <div className='profile-page'>
      <div className="profile-box">
        <div className="close">
      <i class="fa-solid fa-xmark"></i>
        </div>
        <div className="profile-header">
            <img src={`http://localhost:5000/Images/User/${data.image}`} alt="" />
            <h4>{data.name}</h4>
        </div>
        <div className="profile-body">
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Created AT: {data.createdAT}</p>
        </div>
        <div className="profile-footer">
            <button style={{backgroundColor: 'skyblue', color: 'white'}}>EDIT</button>
            <button style={{background: '#c74f4f', color: 'white'}}>DELETE</button>
            <button style={{background: 'black', color: 'white'}}>LOGOUT</button>
        </div>
      </div>
    </div>
     
    
  )
}

export default Profile
