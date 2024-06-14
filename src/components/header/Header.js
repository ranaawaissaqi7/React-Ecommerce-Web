import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,} from 'react-router-dom';
import { isAuthChangeHandler } from '../../store/features/AuthSlice';

export default function Header() {

  const {isAuth}=useSelector((state)=>state.authHandling)

  console.log("headerAuth => ",isAuth)

  const {userCardData}=useSelector((state)=>state.userAllDataHandling)

  console.log("UserAllData => ",userCardData)

  const disPatch=useDispatch()



    // logOutHandler
    const logOutHandler=()=>{
      disPatch(isAuthChangeHandler(false))
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  
  return (
    <>
     <nav className=" bg-black p-4 sticky top-0 z-50">

        <div className="container mx-auto">
        <div className="flex justify-between items-center">
        <Link to={"/"} className="text-white text-lg font-semibold basis-full lg:basis-auto ">Brand Name</Link>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none basis-3/6 flex "
          >
             <div class="badge relative me-5">  <i class="fa-solid fa-cart-shopping"></i>  <span class="  absolute [top:-10px]">{userCardData.length}</span>  </div>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
           
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          }  lg:flex lg:items-center `}
        >
          <div className="text-white lg:flex lg:space-x-4 ms-auto hidden ">
          <Link to={"/"} className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80">
              Home
            </Link>

            {/* isAuth true or false conditions */}

            {
              isAuth ? 

              <>
            <Link  to={"/userAdmin"} className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80"  > <i class="fa-solid fa-user-tie"></i> UserAdmin</Link>
            <Link to={"/shipingAdress"} >Add Shiping Adress</Link>

            <Link to={"/userAdmin"}  className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80"> <div className="badge relative" >  <i class="fa-solid fa-cart-shopping"></i>  <span className='  absolute [top:-10px]'>{userCardData.length}</span>  </div> </Link>

            <button  className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80" onClick={logOutHandler} >LogOut</button>
            </>
              :
              
              <>
            <Link to={"/login"} className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80">
              Login
            </Link>
            <Link to={"/signUp"} className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80">
              SignUp
            </Link>
              </>
            }
          </div>
        </div>
      </div>
      
      <div
          className={`${
            isOpen ? 'block' : 'hidden'
          }  lg:flex lg:items-center `}
        >
          <div className="text-white lg:space-x-4 ms-auto lg:hidden ">
            <Link to={"/"} className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80">
              Home
            </Link>

            {/* isAuth true or false conditions */}

            {
              isAuth ? 

              <>
            <Link to={"/userAdmin"}  className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80 "  > <i class="fa-solid fa-user-tie"></i> UserAdmin</Link>
            <Link to={"/shipingAdress"} className='mt-4 inline-block' >Add Shiping Adress</Link>

            <button  className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80" onClick={logOutHandler} >LogOut</button>
              </>
              
              :
              
              <>
            <Link to={"/login"} className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80">
              Login
            </Link>
            <Link to={"/signUp"} className="block mt-4 lg:inline-block lg:mt-0 hover:opacity-80">
              SignUp
            </Link>
              </>
            }

          </div>
        </div>

        </div>

    </nav>
    </>
  )
}
