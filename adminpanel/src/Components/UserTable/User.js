import React, { useEffect } from 'react'
import './User.css'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../../Redux/adminSlice'

const User = () => {

  const dispatch = useDispatch()
  const {users, error} = useSelector((state)=> state.admin)

  useEffect(()=> {
    dispatch(getUsers())
  },[])
  console.log('users')
  console.log(users)


  return (
    <>

      <table>
        <thead>
     
            <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
            </tr>
        </thead>
        <tbody>
          {users.map((el, i)=>(

            <tr key={i}>
                <td>{i+1}</td>
                <td> <img src={`http://localhost:5000/Images/User/${el.image}`} height={100} width={100} alt="" /> </td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </>
  )
}

export default User
