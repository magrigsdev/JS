import React from 'react'
import hero from '../../assets/hero.png'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'
import Slider from "react-slick"

const Heros = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinity: true,
        speed: 5000,
        slidesToScrool: 1,
        autoplay: true,
        autoplaySpeed: 400,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus:true
       
    }
    const ImageList = [
        {
            id: 1,
            titre: "pour les hommes",
            image:hero,
            description:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.",
        },
                {
            id: 2,
            titre: "pour les femmes",
            image:hero1,
            description:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.",
        },
        {
            id: 3,
            titre: "Pour les enfants",
            image:hero2,
            description:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.",
        },
                        
    ]
   


    return (
        <div className='relative overflow-hidden 
        min-h-[550px] sm:min-h-[650px]
         bg-gray-100 dark:bg-gray-700 dark:text-black flex justify-center items-center '>
            
            <div className='h-[700px] w-[700px] bg-red-400/10 
            dark:bg-gray-500/10
            absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
     
            </div> 
            
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {
                        ImageList.map((data) => (
                                                <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 '>
                            {/* text content */}
                            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left    order-2 sm:order-1'>
                                        <h1 className='text-5xl sm:text-6xl font-bold dark:text-white'>{data.titre }</h1>
                                <p className='text-md dark:text-gray-200'>
                                    {data.description}
                                </p>
                                {/* button  */}
                                <div className=''>
                                    <button className='bg-red-800 dark:bg-gray-800
                                    dark:text-white text-white py-2 px-4 rounded-full '>
                                        Commander maintenant
                                    </button>
                                </div>
                            </div>

                            {/* image here  */}
                            <div className='order-1 sm:order-2'>
                                <div className='relative z-10'>
                                    <img src={data.image} alt=''
                                        className='w-[400px] h-[300px] sm:h[450px]
                                    sm:scale-125 object-contain mx-auto'/>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                        ))
                    }

                </Slider> 

            </div>
      </div>
      
  )
}

export default Heros
