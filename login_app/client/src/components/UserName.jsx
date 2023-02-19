import React from 'react'
import { Link } from 'react-router-dom'

const UserName = () => {
  return (
    <div className="container mx-auto">
      <div className='flex h-screen'>
        <div>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'> Explore</span>
          </div>

          <form className='py-1'>
            <div className='profile flex justify-center py-4'>
              <img src='' alt='avatar' />
            </div>

            <div className='textbox'>
              <input type='text' placeholder='username'/>
              <button type='submit'>Lets go</button>
            </div>

            <div className="text-center py-4">
              <span>Not A Member ? <Link className='text-red-500' to='/register'>Register Now</Link> </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserName