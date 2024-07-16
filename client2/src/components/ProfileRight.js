import React from 'react'
import FollowingCards from './FollowingCards'
import FollwersCards from './FollwersCards'

const ProfileRight = () => {
  return (
    <div className='h-screen bg-blue-300'>
      <FollowingCards/>
      <FollwersCards/>
    </div>
  )
}


export default ProfileRight
