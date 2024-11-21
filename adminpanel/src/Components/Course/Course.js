import React, { useEffect } from 'react'
import './Course.css'
import {useSelector, useDispatch} from 'react-redux'
import { courseEdit, deleteCourse, getCourse, IMG_URL } from '../../Redux/adminSlice'
import {useNavigate} from 'react-router-dom'

const Course = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {course, error} = useSelector((state)=> state.admin)
  
  useEffect(()=> {
    dispatch(getCourse())
    
  },[dispatch])

  const handleDeleteCourse = (id)=> {
    dispatch(deleteCourse(id))
  }

  const handleEditCourse = (id)=> {
    dispatch(courseEdit(id))
    navigate('/dashboard/editcourse')
    
  }


  return (
    <div className='main-card'>
    {course.map((el, i)=> (
      <div className="card shadow" key={i}>
      <img src={`${IMG_URL}/Images/Course/${el.image}`} className="card-img-top" alt="Course Image" />
      <div className="card-body">
        <h5 className="card-title text-center">$149.00</h5>
        <div className="starts mt-3">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        </div>
        <p className="card-title text-center mt-3">
        {el.name}
        </p>
        <p className="card-title text-center mt-3">
        {el.description}
        </p>
        <div className="card-foot mt-3">
  
        <a href="#" className="btn text-light" style={{backgroundColor: '#08bbca'}}>
          VIEW
        </a>
        <a href="#" className="btn text-light" style={{backgroundColor: '#08bbca'}} onClick={()=> handleEditCourse(el._id)}>
          EDIT
        </a>
        <a href="#" className="btn text-light" style={{backgroundColor: '#08bbca'}} onClick={()=> handleDeleteCourse(el._id)}>
          DELETE
        </a>
        </div>
      </div>
        <span className="time text-center">{el.createdAT}</span>
    </div>
    ))}
    
   </div>
  )
}

export default Course
