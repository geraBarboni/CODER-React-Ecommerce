import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

const FinishPay = () => {
  const { orderId } = useContext(CartContext)
  return (
    <div className="min-h-screen flex">
      <div className="h-96 w-full m-auto flex">
        <div className=" m-auto ">
          <p className="font-unifrakturMaguntia text-5xl font-bold m-auto">
            Gracias por tu compra!
          </p>
          <div className="flex mt-5">
            <div className="m-auto">
              <p className="font-dm-sans text-center text-xl my-3">
                Segui tu pedido con el codigo:
              </p>
              <p className="font-dm-sans text-center">{orderId}</p>
            </div>
          </div>
          <Link to={'/'}>
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
                active:border-yellow-400"
              type="button"
            >
              volver a comprar
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FinishPay
