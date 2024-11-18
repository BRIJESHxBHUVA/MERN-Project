import React, { useState } from 'react'
import './Login.css'

const Login = () => {
    const [login, setLogin] = useState(false)
  return (
    <div className='main'>
        <div className="login-page">
            {!login ? (
                 <form>
                 <input type="text" placeholder='You Email' required />
                 <input type="password" placeholder='You Password' required />
                 <button>Login</button>
                 <center><p>Create a new account <span onClick={()=> setLogin(true)} style={{color: '#06bbcc'}}>Click here</span></p></center>
             </form>

            ) : (

                <form>
                <input type="text" placeholder='You Name' required />
                <input type="email" placeholder='You Email' required />
                <input type="text" placeholder='You Phone' required />
                <input type="password" placeholder='You Password' required />
                <input type="file" placeholder='You Image' required />
                <button>Sign Up</button>
               <center> <p>Already have an account ? <span onClick={()=> setLogin(false)} style={{color: '#06bbcc'}}>Login here</span></p></center>
            </form>

            )}
           
        </div>
    </div>
  )
}

export default Login
