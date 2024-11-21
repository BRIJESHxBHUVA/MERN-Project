import React, { useEffect, useState } from 'react'
import '../Login/Login.css'
import { adminEdit, editAdmin, editCourse, IMG_URL } from "../../Redux/adminSlice";
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const CourseEdit = () => {

    const [courseUpdate, setCourseUpdate] = useState({
        name: '',
        description: '',
        numofvid: '',
        image: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {course, error} = useSelector((state)=> state.admin)

    useEffect(()=>{
     
      if(course){
        console.log(course)
        console.log(course._id)
        setCourseUpdate({
            name: course.name || '',
            description: course.description || '',
            numofvid: course.numofvid || '',
            image: course.image || ''
        })
      }
    },[course])


    const handleChange = (e)=> {
        const {name, value, files} = e.target
        if(name === 'image'){
            setCourseUpdate((prevstate)=>({
                ...prevstate,
                [name]: files[0],
            }))
        }else{
            setCourseUpdate((prevstate)=>({
                ...prevstate, 
                [name]: value
            }))
        }
    } 

    const HandleSubmit = async (e)=> {
        e.preventDefault();
        try {
          const success = await dispatch(editCourse({id: course._id , data: courseUpdate})) 
          if(success.meta.requestStatus === 'fulfilled'){
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
          <input type="text" placeholder="You Name" name="name" value={courseUpdate.name} required onChange={handleChange} />
          <input type="text" placeholder="You Email" name="description" value={courseUpdate.description} required onChange={handleChange} />
          <input type="text" placeholder="You Phone" name="numofvid" value={courseUpdate.numofvid} required onChange={handleChange} />
          <input type="file" placeholder="You Image" name="image" required onChange={handleChange} />
          <img src={`${IMG_URL}/Images/Course/${courseUpdate.image}`} height={100} width={100} alt="Previos Image" />
          <button type="submit">UPDATE</button>
        </form>
      </div>
    </div>
  );
}

export default CourseEdit
