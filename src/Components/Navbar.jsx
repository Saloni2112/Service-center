import React from 'react'
import images from '../asseds/images.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
    <div className="min-h-20 bg-gray-900 flex items-center justify-between px-5">
        <div>
            <Link to={"/"}><img src={images} className="bg-gray-900 p-2 w-[200px] h-14 object-cover" alt=""/></Link>
        </div>
       <span>
     <Link to={"/login"} className=" m-1 p-2 bg-gray-300 text-gray-900 rounded-md shadow-xl font-medium italic">Log In</Link>
     <Link to={"/register"} className="m-1 p-2 bg-gray-300 text-gray-900 rounded-md shadow-xl font-medium italic">Register</Link>
    <button className="m-1 p-2 bg-red-400 text-gray-900 rounded-md shadow-xl font-medium italic">Log Out</button>
       </span>
    </div>
  )
}

export default Navbar


