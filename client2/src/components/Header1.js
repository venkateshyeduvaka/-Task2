

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoSearchSharp, IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { MediaContext } from '../context/MediaContext';


const Header1 = () => {

    const {user}=useContext(MediaContext)

    const navigate=useNavigate()

    const HandleLogout=()=>{
        localStorage.removeItem("user")
        navigate("/login")
    }
  

    return (
        <div className='flex flex-col w-[20vw] h-[100vh] shadow bg-blue-300 px-3 items-center'>
            <div className='mb-5 mt-5'>
                <span className='text-orange-400 text-3xl font-bold'>Social<span className='text-white'>Connect</span></span>
            </div>

            <div className='flex items-center m-2'>
                <input
                    className='h-9 w-[16vw] bg-transparent outline-none border-gray-300 border-2 border-r-0 rounded-l-full px-3 pb-0.5'
                    type='search'
                />
                <div className='bg-white h-9 w-12 flex justify-center items-center rounded-r-full'>
                    <IoSearchSharp className='h-5 w-5' />
                </div>
            </div>

            <div className='flex flex-col h-[25vh] w-[15vw] p-5'>
                <div className='flex gap-2 items-center mt-2 mb-7'>
                    <IoHomeOutline className='w-8 h-8 text-blue-900' />
                    <span>Home</span>
                </div>
               
               <Link to="/profile">
                <div className='flex gap-2 items-center'>
                    <CgProfile className=' h-8 w-8 text-blue-900' />
                    <span>Profile</span>
                </div>
                </Link>

            </div>

            <div className='flex-col mt-auto mb-3'>
                <hr className="my-4 border-t-2 border-gray-300 w-[19vw]" />
                <div className='flex flex-col items-center pr-2'>
                    <CgProfile className='text-gray h-8 w-8' />
                    <span>{user?.user?.fullname}</span>
                </div>
                <button
                onClick={HandleLogout}
                    className='ml-16 bg-blue-800 hover:bg-blue-900 text-white px-3 h-6 rounded-full'
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Header1;
