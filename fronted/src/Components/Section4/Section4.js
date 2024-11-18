import React from "react";
import "./Section4.css";
import img from '../../Images/about.jpg'

const Section4 = () => {
  return (
    <div className="section4">
      <center>
        <h3>Our Courses</h3>
      </center>
      <div className="sec4-box">
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">$149.00</h5>
            <div className="starts mt-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <p class="card-title text-center mt-3">
            Web Design & Development Course for Beginners
            </p>
            <div className="card-foot mt-3">

            <a href="#" class="btn text-light" style={{backgroundColor: '#08bbca'}}>
              View
            </a>
            <span className="time">Sunday</span>
            </div>
          
          </div>
        </div>
        
        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">$149.00</h5>
            <div className="starts mt-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <p class="card-title text-center mt-3">
            Web Design & Development Course for Beginners
            </p>
            <div className="card-foot mt-3">

            <a href="#" class="btn text-light" style={{backgroundColor: '#08bbca'}}>
              View
            </a>
            <span className="time">Sunday</span>
            </div>
          
          </div>
        </div>

        <div class="card">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">$149.00</h5>
            <div className="starts mt-3">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <p class="card-title text-center mt-3">
            Web Design & Development Course for Beginners
            </p>
            <div className="card-foot mt-3">

            <a href="#" class="btn text-light" style={{backgroundColor: '#08bbca'}}>
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
