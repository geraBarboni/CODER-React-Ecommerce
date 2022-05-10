import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

const NavBar = ({ children }) => {
  const { cart } = useContext(CartContext)
  return (
    <div className="bg-black p-3 flex shadow-2xl">
      <div>
        <Link
          to={'/'}
          className="font-unifrakturMaguntia text-yellow-400 text-2xl"
        >
          BAG
        </Link>
      </div>
      <div className="ml-auto">
        <ul className="flex font-dm-sans text-white">
          <li className="px-2">
            <Link to={'/cetegory/shoes'}>Shoes</Link>
          </li>
          <li className="px-2">
            <Link to={'/cetegory/clothes'}>Clothes</Link>
          </li>
          {cart.length > 0 ? (
            <li className="p-1 pl-7">
              <Link to={'/cart'}>{children}</Link>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
