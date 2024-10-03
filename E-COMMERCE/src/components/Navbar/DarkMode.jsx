import React, { useState } from 'react'

import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

const Darkmode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )

    const element = document.documentElement
    let sun = document.querySelector(".sun")   
    let moon = document.querySelector(".moon")
   
    
    
    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
            
        }
        else {
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
           
        }
        changing(theme)
    }, [theme])
    
    function changing(e) {
        if (e == "dark") {
            console.log("dark mode ...")
        }
        else {
            console.log("light mode ...")
        }
    }
  return (
      <div className='flex'>
          <span  className='w-10 
              cursor-pointer 
              drop-shadow-sm duration-300 transition-all
               sun absolute'
              onClick={()=>{setTheme(theme === "dark" ? "light":"dark")}}
                ><IoSunny /></span>
          
          <span  className='w-10 cursor-pointer 
              drop-shadow-md duration-300 transition-all  moon'
          onClick={()=>{setTheme( theme === "light" ? "dark":"light")}}><IoMoon /></span>
    </div>
  )
}

export default Darkmode
