import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ children }) => {
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
          {/*
          <li className="px-2">
            <Link to={'/cetegory'}>Catálogo</Link>
          </li>
          */}
          <li className="px-2">
            <Link to={'/cetegory/shoes'}>Shoes</Link>
          </li>
          <li className="px-2">
            <Link to={'/cetegory/clothes'}>Clothes</Link>
          </li>
          <li className="p-1 pl-7">
            <a href="">{children}</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
