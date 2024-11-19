import React, { useState } from 'react'
import './Login.css'
// import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)

    const [usersLogin, setUsersLogin] = useState({
      email: '', 
      password: ''
    })

    const [signUp, setSignUp] = useState({
      name: '',
      email: '',
      phone: '',
      password: '',
      image: ''
    })

    // const {loading, error} = useSelector((state)=> state.user)


    const handleLogin = (e)=> {
      const {name, value} = e.target
      setUsersLogin((prevstate)=>({
        ...prevstate,
        [name]: value,
      }))
    }

    const HandleLogin = async (e)=> {
      e.preventDefault();
      try {
        // const success = await dispatch(userLogin(usersLogin))
        // if(success){
        //   navigate('/e-learning')
        // }
      } catch (error) {
        console.log('User Login error', error)
      }
     
    }

    const HandleChange = (e)=> {
      const {name, value, files} = e.target
      if(name === 'image'){
        setSignUp((prevstate)=>({
          ...prevstate,
          [name]: files[0],
        }))
      }else{
        setSignUp((prevstate)=>({
          ...prevstate,
          [name]: value,
        }))
      }
    }

    const HandleSubmit = async (e)=> {
      e.preventDefault();
      try {
        // const success = await dispatch(AddUser(signUp))
        // if(success){
        //   setLogin(false)
        // }
        console.log(signUp)
      } catch (error) {
        console.log('User Register Error', error)
      }
    }

  return (
    <div className='main'>
        <div className="login-page">
            {!login ? (
                 <form onSubmit={HandleLogin}>
                 <input type="text" name='email' placeholder='You Email' required onChange={handleLogin} />
                 <input type="password" name='password' placeholder='You Password' required onChange={handleLogin} />
                 <button type='submit'>Login</button>
                 <center><p>Create a new account <span onClick={()=> setLogin(true)} style={{color: '#06bbcc'}}>Click here</span></p></center>
                {/* {error && <p>{error}</p>} */}
                
             </form>

            ) : (

                <form onSubmit={HandleSubmit}>
                <input type="text" placeholder='You Name' name='name' value={signUp.name} required onChange={HandleChange} />
                <input type="email" placeholder='You Email' name='email' value={signUp.email} required onChange={HandleChange} />
                <input type="text" placeholder='You Phone' name='phone' value={signUp.phone} required onChange={HandleChange} />
                <input type="password" placeholder='You Password' name='password' value={signUp.password} required onChange={HandleChange} />
                <input type="file" placeholder='You Image' name='image' onChange={HandleChange} required />
                <button type='submit'>Sign Up</button>
                {/* {error && <p>{error}</p>} */}
               <center> <p>Already have an account ? <span onClick={()=> setLogin(false)} style={{color: '#06bbcc'}}>Login here</span></p></center>
            </form>

            )}
           
        </div>
    </div>
  )
}

export default Login
