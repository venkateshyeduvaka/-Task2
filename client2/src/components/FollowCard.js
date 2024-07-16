import React, { useContext, useState, useEffect } from 'react';
import profile from "../images/profile.png";
import { MediaContext } from '../context/MediaContext';

import { NavLink } from 'react-router-dom';



const FollowCard = ({person}) => {

    const {user,followUser,unfollowUser}=useContext(MediaContext)

    const [isFollowing, setIsFollowing] = useState(user?.user?.followers.includes(person?._id));

    //console.log("person---->",person.fullname)
    //console.log("p--bool-->",isFollowing)
    //console.log("person--followers-->",person.followers)
    //console.log("userId-->",user?.user?._id)


    
    
    const handleFollow = async () => {
        try {
            await followUser(person._id, user?.user?._id);
            setIsFollowing(true);
        } catch (error) {
            console.error('Failed to follow user:', error);
        }
    };

    const handleUnfollow = async () => {
        try {
            await unfollowUser(person._id, user?.user?._id);
            setIsFollowing(false);
        } catch (error) {
            console.error('Failed to unfollow user:', error);
        }
    };

    return (
        
        <div className='flex w-full items-center border-2 border-gray-300 m-0.5 justify-between'>
            <div className='flex gap-5'>
               <NavLink className="link" to={`/profile/${person._id}`} exact>
                <img src={person?.profile_pic?person?.profile_pic:profile} className='ml-1 h-10 w-10 rounded-full' alt="" />
                </NavLink>
                <div className='flex flex-col justify-start items-center'>
                    <span className='font-bold text-sm'>{person?.fullname}</span>
                    <span className='text-sm'>{person?.username}</span>
                </div>
            </div>
            <button
                type='button'
                onClick={isFollowing ? handleUnfollow : handleFollow}
                className={`flex items-center justify-center text-gray-400 ${isFollowing ? 'bg-orange-800' : 'bg-orange-400'} m-2 border-none rounded-md hover:cursor-pointer hover:text-orange-500 hover:bg-transparent hover:border-2 hover:border-solid hover:border-orange-500 h-8 w-20 pl-8 pr-8`}
            >
                {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
        </div>
        
    );
};

export default FollowCard;
