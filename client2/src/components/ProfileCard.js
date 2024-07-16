import React, { useContext, useEffect } from 'react';
import Cover from "../images/cover.jpg";
import profile from "../images/profile.png";
import { MediaContext } from '../context/MediaContext';

const ProfileCard = () => {
  
  const {user}=useContext(MediaContext)
  console.log("user-->card-->",user?.user?.profile_pic)

  return (
    <div className='mt-1 bg-white flex flex-col rounded-lg relative gap-1 overflow-x-clip'>
      <div className='relative flex flex-col align-center justify-center w-full'>
        <img src={Cover} className='w-full rounded-lg' alt="Cover"/>
        <img src={user?.user?.profile_pic?user?.user?.profile_pic:profile} className='w-24 h-24 rounded-full absolute -bottom-10 left-[40%]' alt="Profile"/>
      </div>
      <div className="flex flex-col mt-8 items-center">
        <span className='font-bold'>{user?.user?.fullname}</span>
      </div>
      <div className='flex flex-col gap-2'>
        <hr className='w-80 self-center border-1 border-solid border-gray-500'/>
        <div className='flex self-center gap-2 w-80 justify-around items-center'>
          <div className='flex flex-col items-center justify-center gap-1'>
            <span className='font-bold'>{user?.user?.following.length>0?user.user.following.length:0}</span>
            <span>Followers</span>
          </div>
          <div className='h-12 border-l-2 border-solid border-gray-500'></div>
          <div className='flex flex-col items-center justify-center gap-1'>
            <span className='font-bold'>{user?.user?.followers.length>0?user.user.followers.length:0}</span>
            <span>Following</span>
          </div>
        </div> 
        <hr className='w-80 border-1 self-center border-solid border-gray-500'/>
        <h5 className='self-center text-orange-500 text-base'>My Profile</h5>
      </div>
    </div>
  );
}


export default ProfileCard;
