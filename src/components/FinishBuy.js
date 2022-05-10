import React from 'react'
import { Link } from 'react-router-dom'

const FinishBuy = () => {
  return (
    <Link to={'/cart'}>
      <button
        className="
        text-gray-900
        font-dm-sans
        font-medium
        p-2
        w-full
        mt-3 md:mt-5 lg:mt-7
        border-2
      border-gray-900
        rounded
        bg-yellow-400
        duration-150
        hover:bg-gray-700
        hover:text-yellow-400
        active:bg-gray-300
        active:text-gray-500
        active:border-yellow-400
    "
      >
        Finalizar compra
      </button>
    </Link>
  )
}

export default FinishBuy
