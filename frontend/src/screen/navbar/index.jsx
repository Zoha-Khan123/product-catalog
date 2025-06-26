import React, { useState } from "react"
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  return(
    <>
   <div className="shadow p-[1rem] flex justify-between">
      <div>Navbar</div>
      {
        toggle ? <IoMdClose className="z-10 block md:hidden cursor-pointer" onClick={()=>setToggle(false)}/> : <FaBars className="z-10 block md:hidden cursor-pointer" onClick={()=>setToggle(true)}/>
      }
      <ul className="hidden gap-10 md:flex">
        <li className="cursor-pointer"><Link to="/home">Home</Link></li>
        <li className="cursor-pointer"><Link to="/product">Product</Link></li>
        <li className="cursor-pointer"><Link to="/create-form">Create Form</Link></li>
        <li className="cursor-pointer"><Link to="/auth/login">Login</Link></li>
      </ul>

      {/* Responsive */}
<ul className={`w-[60%] h-screen fixed top-0 flex justify-center items-center gap-10 flex-col md:hidden transition-all duration-500 ease-in-out ${toggle ? 'right-0' : 'right-[-100%]'}`}>
        <li className="cursor-pointer"><Link to="/home">Home</Link></li>
        <li className="cursor-pointer"><Link to="/product">Product</Link></li>
        <li className="cursor-pointer"><Link to="/create-form">Create Form</Link></li>
        <li className="cursor-pointer"><Link to="/auth/login">Login</Link></li>
      </ul>
    </div>
    </>
  )
}

export default Navbar;