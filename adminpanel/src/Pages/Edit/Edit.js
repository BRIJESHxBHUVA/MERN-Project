import React, { useEffect, useState } from "react";
import '../Login/Login.css'
import { adminEdit, editAdmin } from "../../Redux/adminSlice";
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Edit = () => {

    const [userUpdate, setUserUpdate] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        image: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {admins, error} = useSelector((state)=> state.admin)

    useEffect(()=>{
      dispatch(adminEdit())
    },[dispatch])

    useEffect(() => {
      if (admins) {
        setUserUpdate({
          name: admins.name || "",
          email: admins.email || "",
          phone: admins.phone || "",
          password: admins.password || "",
          image: admins.image || "",
        });
      }
    }, [admins]);

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
        try {
          const success = dispatch(editAdmin(userUpdate)) 
          console.log(userUpdate) 
          if(success){
            navigate('/')
          }        
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className="main">
      <div className="login-page">
        <form onSubmit={HandleSubmit}>
          <input type="text" placeholder="You Name" name="name" value={userUpdate.name} required onChange={handleChange} />
          <input type="email" placeholder="You Email" name="email" value={userUpdate.email} required onChange={handleChange} />
          <input type="text" placeholder="You Phone" name="phone" value={userUpdate.phone} required onChange={handleChange} />
          <input type="password" placeholder="You Password" name="password" value={userUpdate.password} required onChange={handleChange} />
          <input type="file" placeholder="You Image" name="image" required />
          <img src={`http://localhost:5000/Images/Admin/${admins.image}`} height={100} width={100} alt="Previos Image" />
          <button type="submit">UPDATE</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
