import React from 'react'
import logo from "../../assets/react.svg"
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
      <div className=''>
      {/* upper navbar */}
          <div className='shadow-md bg-red-400 text-black dark:bg-gray-900 dark:text-white duration-200 relative z-40 py-3 sm:py-1'>
              <div>
                  {/* container for items */}
                  <div className='container 
                        flex justify-between items-center'>
                      
                      <div className=''>
                          <a href='#'
                              className='font-bold text-2xl 
                          sm:text-3xl flex gap-2'>
                              <img src={logo} alt='mon logo' 
                                  className='w-10 '
                              />
                              Elianshop
                          </a>
                      </div>
                      {/* search bar and order button */}
                      <div className=''>
                          <div className='relative group hidden sm:block'>
                              <input type='text'
                                  placeholder='recherche'
                                  className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 py-1 px-2 
                                  focus:outline-none focus:border-1 
                                  focus:border-red-400 '
                              />
                              <FaSearch 
                                  className='text-gray-500
                                   group-hover:text-red-400 
                                   absolute top-1/2 -translate-y-1/2 right-3'
                              />
                          </div>
                      </div>
                      {/* order buttons */}
                      <button
                          onClick={() => {
                              alert("test if it runs")
                          }}
                          className='bg-red-500 transition-all 
                          duration-300 text-white py-1 
                          px-4 rounded-full flex items-center gap-3 group'
                      >
                          <span className='group-hover:block hidden
                           transition-all duration-300'>
                              order</span>
                          <FaShoppingCart 
                              className='cursor-pointer drop-shadow-sm'
                          />
                      </button>

                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar
