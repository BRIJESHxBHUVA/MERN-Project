import React, { useEffect } from "react";
import "./Section4.css";
import img from "../../Images/about.jpg";
import { useSelector, useDispatch } from "react-redux";
import { GetCourse, IMAGE_URL } from "../../Redux/userSlice";

const Section4 = () => {
  const dispatch = useDispatch();
  const { error, course } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(GetCourse());
    console.log(course);
  }, []);

  return (
    <div className="section4">

      <center>
        <h3>Our Courses</h3>
      </center>

      <div className="sec4-box">
        {course.map((el, i) => (
          <div className="card" key={i}>
            <img
              src={`${IMAGE_URL}/Images/Course/${el.image}`}
              className="card-img-top"
              alt="Course Image"
            />
            <div className="card-body">
              <h5 className="card-title text-center">$149.00</h5>
              <div className="starts mt-3">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="card-title text-center mt-3">{el.name}</p>
              <p className="card-title text-center mt-3">
                {el.description}
              </p>
              <p className="card-title text-center mt-3">
               Total Videos: {el.numofvid}
              </p>
              <div className="card-foot mt-3">
                <a
                  href="#"
                  className="btn text-light"
                  style={{ backgroundColor: "#08bbca" }}
                >
                  View
                </a>
                <span className="time">{course.createdAT}</span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Section4;
