import React, { useEffect } from "react";
import "./Section4.css";
import img from '../../Images/about.jpg'
import {useSelector, useDispatch} from 'react-redux'
import { GetCourse } from "../../Redux/userSlice";

const Section4 = () => {

  const dispatch = useDispatch()
  const {error, course} = useSelector((state)=> state.user)
  useEffect(()=>{
    dispatch(GetCourse())
  },[])

  return (
    <div className="section4">
      <center>
        <h3>Our Courses</h3>
      </center>
      <div className="sec4-box">
        <div className="card">
          <img src={`http://localhost:5000/Images/Course/${course.image}`} className="card-img-top" alt="Course Image" />
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
            {course.name}
            </p>
            <p className="card-title text-center mt-3">
            {course.description}
            </p>
            <div className="card-foot mt-3">

            <a href="#" className="btn text-light" style={{backgroundColor: '#08bbca'}}>
              View
            </a>
            <span className="time">{course.createdAT}</span>
            </div>
          
          </div>
        </div>
        
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
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
            Web Design & Development Course for Beginners
            </p>
            <div className="card-foot mt-3">

            <a href="#" className="btn text-light" style={{backgroundColor: '#08bbca'}}>
              View
            </a>
            <span className="time">Sunday</span>
            </div>
          
          </div>
        </div>

        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
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
            Web Design & Development Course for Beginners
            </p>
            <div className="card-foot mt-3">

            <a href="#" className="btn text-light" style={{backgroundColor: '#08bbca'}}>
              View
            </a>
            <span className="time">Sunday</span>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
