import React from 'react'

const NavBar = ({ children }) => {
  return (
    <div className="bg-gray-400 p-3 flex">
      <div className="font-semibold">
        <a href="">Home</a>
      </div>
      <div className="ml-auto">
        <ul className="flex">
          <li className="px-2">
            <a href="">productos</a>
          </li>
          <li className="px-2">
            <a href="">nosotros</a>
          </li>
          <li className="px-2">
            <a href="">contacto</a>
          </li>
          <li className="px-2">
            <a href="">promos</a>
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
