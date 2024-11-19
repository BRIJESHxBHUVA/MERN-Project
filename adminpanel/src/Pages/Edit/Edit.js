import React, { useState } from "react";
import '../Login/Login.css'

const Edit = () => {

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
          <input type="text" placeholder="You Name" name="name" required onChange={handleChange} />
          <input type="email" placeholder="You Email" name="email" required onChange={handleChange} />
          <input type="text" placeholder="You Phone" name="phone" required onChange={handleChange} />
          <input type="password" placeholder="You Password" name="password" required onChange={handleChange} />
          <input type="file" placeholder="You Image" name="image" required />
          <button type="submit">UPDATE</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
