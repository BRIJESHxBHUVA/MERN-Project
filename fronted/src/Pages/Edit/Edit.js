import React, { useState, useEffect } from "react";
import '../Login/Login.css'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { editUser, userEdit } from "../../Redux/userSlice";

const Edit = () => {

    const [userUpdate, setUserUpdate] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        image: ''
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, loading, error} = useSelector((state)=> state.user)
    console.log(user)

    useEffect(()=> {
      dispatch(editUser())
    },[dispatch])

    useEffect(()=> {
      setUserUpdate({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        password: user.password || '',
        image: user.image || ''
      })
    }, [user])

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
        console.log(userUpdate)
        try {
          const success = dispatch(userEdit(userUpdate))
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
          <input type="file" placeholder="You Image" name="image" required onChange={handleChange} />
          <img src={`http://localhost:5000/Images/User/${userUpdate.image}`} height={100} width={100} alt="" />
          <button type="submit">UPDATE</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
