import React from 'react'
import logo from "../../assets/logo/logo2.png";
import Darkmode from './Darkmode';

const Menu = [
    {
        id: 1,
        name: "Accueil",
        link:"/#",
    },
    {
        id: 2,
        name: "Plus notés",
        link:"/#",
    },
    {
        id: 3,
        name: "Enfants",
        link:"/#",
    },
    {
        id: 4,
        name: "Homme",
        link:"/#",
    },
    {
        id: 5,
        name: "Femmes",
        link:"/#",
    },
]

const Navbar = () => {
    return (
        <div className='w-full bg-red-900 shadow-md dark:bg-gray-900
         dark:text-gray-100 duration-200 relative z-40'>
            <div className='container flex justify-between items-center py-2 px-2 text-white'>
                {/* logo */}
                <div>
                    <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2 '>
                        <img src={logo} alt='logo' className='w-10' />
                        e-commerce
                    </a>
                </div>

                {/* link item */}
                <di className="flex justify-center">
                    <ul className='sm:flex hidden items-center gap-4' >
                        {
                            Menu.map((data) => (
                                <li key={data.id}>
                                    <a href={data.link}
                                        className='inline-block px-4 
                                        hover:text-red-300 duration-100 dark:hover:text-gray-300'> {data.name} </a>
                                </li>
                            ))
                        }
                    </ul>
                </di>

                {/* autre darkMode */}
                <div>
                    <Darkmode/>
                </div>
            
            </div>
        </div>
      
  )
}

export default Navbar
