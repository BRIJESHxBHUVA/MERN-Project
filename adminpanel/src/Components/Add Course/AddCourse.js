import React, { useState } from 'react'
import '../../Pages/Login/Login.css'

const AddCourse = () => {

    const [userUpdate, setUserUpdate] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        image: ''
    })

    const handleChange = (e)=> {
        const {name, value, files} = e.target
        if(name === 'image'){
            setUserUpdate((prevstate)=>({
                ...prevstate,
                [name]: files[0],
            }))
        }else{
            setUserUpdate((prevstate)=>({
                ...prevstate, 
                [name]: value
            }))
        }
    }

    const HandleSubmit = (e)=> {
        e.preventDefault();
    }

  return (
    <div className="main">
      <div className="login-page">
        <form onSubmit={HandleSubmit}>
          <input type="text" placeholder="Course Name" name="name" required onChange={handleChange} />
          <input type="email" placeholder="Course Description" name="description" required onChange={handleChange} />
          <input type="text" placeholder="Number of Videos" name="numofvid" required onChange={handleChange} />
          <input type="file" placeholder="Course Image" name="image" required />
          <button type="submit">ADD COURSE</button>
        </form>
      </div>
    </div>
  );
  
}

export default AddCourse
