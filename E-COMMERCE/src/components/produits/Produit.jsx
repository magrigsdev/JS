import React from 'react'
import produit1 from '../../assets/produits/produit1.jpg'
import produit2 from '../../assets/produits/produit2.jpg'
import produit3 from '../../assets/produits/produit3.jpg'
import produit4 from '../../assets/produits/produit4.jpg'
import produit5 from '../../assets/produits/produit5.jpg'
import { FaStar } from "react-icons/fa";

// shirts important 
import s1 from '../../assets/shirts/shirt1.jpg'
import s2 from '../../assets/shirts/shirt2.jpg'
import s3 from '../../assets/shirts/shirt3.jpg'
import s4 from '../../assets/shirts/shirt4.jpg'
import s5 from '../../assets/shirts/shirt5.jpg'


const Produits = [
    {
        id: 1,
        img: produit1,
        titre: "Belge",
        note: 5.0,
        couleur: "white",
        aosDelay:"0",
    },
        {
        id: 2,
        img: produit2,
        titre: "Français",
        note: 4.0,
        couleur: "red",
        aosDelay:"200",
    },
    {
        id: 3,
        img: produit3,
        titre: "Anglais",
        note: 3.3,
        couleur: "purple",
        aosDelay:"300",
    },
    {
        id: 4,
        img: produit4,
        titre: " Allemand",
        note: 3.0,
        couleur: "yellow",
        aosDelay:"300",
    },
    {
        id: 5,
        img: produit5,
        titre: "Finlandais",
        note: 2.0,
        couleur: "orange",
        aosDelay:"400",
    },
]

const Shirts = [
    
]
const Produit = () => {

  return (
      <div className='dark:bg-gray-600 w-full '>
          <div>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    {/* header section */}
                    <h2 className='text-2xl text-red-800  font-bold dark:text-red-300 py-4'>
                      Quelques exemplaires pour femmes
                  </h2>
                  <h1 className='text-3xl font-bold dark:text-white py-2 px-2'>Produits</h1>
                  <p className='text-md text-gray-500 dark:text-gray-100 py-4 px-2'>
                      Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum.
                  </p>
                    {/* body secteur */}
                  <div className='grid grid-cols-1 
                    sm:grid-cols-3 md:grid-cols-4 
                    lg:grid-cols-5
                    place-items-center gap-5'>
                      
                      {/* card section */}
                        {
                          Produits.map((produit) => (
                              <div className='space-y-3'>
                                  <img
                                      src={produit.img} alt="logo"
                                      className='w-[150px] h-[220px] object-cover rounded-md'
                                  />
                                  <div>
                                      <h3 className='font-semibold'> {produit.titre} </h3>
                                      <p className='text-sm text-gray-600 dark:text-gray-200'>
                                          <i className='text-1xl font-extrabold'>.</i>
                                          {produit.couleur} </p>
                                      
                                      <div className='flex items-center gap-1'>
                                          <FaStar className='text-yellow-500' />
                                          <span> {produit.note} </span>
                                      </div>
                                  </div>
                                  
                              </div>
                          ))
                        }   
                  </div>
                  
                  {/* section body */}
                  {
                      
                  }
                </div>
          </div>    
    </div>
  )
}

export default Produit
