import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black w-full gap-4 p-4 grid grid-cols-1 sm:grid-cols-2 mt-auto">
      <div className="w-full">
        <Link
          to={'/'}
          className="font-unifrakturMaguntia text-yellow-400 text-2xl"
        >
          BAG
        </Link>
      </div>
      <div className="w-full">
        <ul className="font-dm-sans text-white">
          <li>
            <Link className="px-2 hover:text-yellow-400" to={'/'}>
              Catalogo
            </Link>
          </li>
          <li>
            <Link className="px-6 hover:text-yellow-400" to={'/cetegory/shoes'}>
              Shoes
            </Link>
          </li>
          <li>
            <Link
              className="px-6 hover:text-yellow-400"
              to={'/cetegory/clothes'}
            >
              Clothes
            </Link>
          </li>
          <li>
            <Link className="px-2 hover:text-yellow-400" to={'/cart'}>
              Carrito
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
