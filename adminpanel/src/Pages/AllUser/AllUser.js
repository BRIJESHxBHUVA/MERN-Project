import React, { useEffect } from 'react'
import './AllUser.css'
import User from '../../Components/UserTable/User'


const AllUser = () => {

  return (
    <div className='alluser'>
        <div className="title">
            <h4>All Users</h4>
        </div>
      <User/>
    </div>
  )
}

export default AllUser
