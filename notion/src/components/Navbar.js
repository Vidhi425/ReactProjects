import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"



const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex flex-col md:flex-row gap-8 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/"> 
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className='text-zinc-200 flex gap-x-6'>
                <li>
                    <Link to="/">Home </Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-zinc-800 text-zinc-200 py-[8px] 
                    px-[12px] rounded-[8px] border border-zinc-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-zinc-800 text-zinc-200 py-[8px] 
                    px-[12px] rounded-[8px] border border-zinc-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                      
                    }}
                    className='bg-zinc-800 text-zinc-200 py-[8px] 
                    px-[12px] rounded-[8px] border border-zinc-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-zinc-800 text-zinc-200 py-[8px] 
                    px-[12px] rounded-[8px] border border-zinc-800'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
      
    </div>
  )
}

export default Navbar