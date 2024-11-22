import React, { useState } from 'react'
import '../../Pages/Login/Login.css'
import {useDispatch, useSelector} from 'react-redux'
import { addCourse } from '../../Redux/adminSlice'
import { useNavigate } from 'react-router-dom'

const AddCourse = () => {

    const [newCourse, setNewCourse] = useState({
        name: '',
        description: '',
        numofvid: '',
        image: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading ,error} = useSelector((state)=> state.admin)

    const handleChange = (e)=> {
        const {name, value, files} = e.target
        if(name === 'image'){
          setNewCourse((prevstate)=>({
                ...prevstate,
                [name]: files[0],
            }))
        }else{
          setNewCourse((prevstate)=>({
                ...prevstate, 
                [name]: value
            }))
        }
    }

    const HandleSubmit = async (e)=> {
        e.preventDefault();
        console.log(newCourse)
        try {    
          const success = await dispatch(addCourse(newCourse))
          if(success){
            navigate('/dashboard/viewcourse')
          }
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className="main">
      <div className="login-page">
        <form onSubmit={HandleSubmit}>
          <input type="text" placeholder="Course Name" name="name" required onChange={handleChange} />
          <input type="text" placeholder="Course Description" name="description" required onChange={handleChange} />
          <input type="text" placeholder="Number of Videos" name="numofvid" required onChange={handleChange} />
          <input type="file" placeholder="Course Image" name="image" required onChange={handleChange} />
          <button type="submit">ADD COURSE</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
  
}

export default AddCourse
