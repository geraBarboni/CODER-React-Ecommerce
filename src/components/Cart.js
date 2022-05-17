import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

const Cart = () => {
  const { cart } = useContext(CartContext)
  const { clearCart } = useContext(CartContext)
  const { removeItem } = useContext(CartContext)
  return (
    <div className="min-h-screen">
      <div className="p-5">
        {cart.map((p) => (
          <div key={p.id} className="flex my-2 p-3 shadow-md rounded">
            <div className="min-w-fit max-w-full h-16 rounded-lg">
              <img
                src={p.pictureURL}
                alt={p.desc}
                className="w-16 h-full rounded"
              />
            </div>
            <div className="my-auto w-full ml-5 font-dm-sans">
              <p className="font-bold">{p.title}</p>
              <p>${p.price}</p>
            </div>
            <div className="flex w-full ml-auto font-dm-sans">
              <p className="m-auto my-auto font-bold">x{p.cantidad}</p>
            </div>
            <div className="ml-auto my-auto">
              <button
                className="
              font-dm-sans
              font-medium
              p-2
              w-full
              mt-3 md:mt-5 lg:mt-7
              text-yellow-400
              border-2
              border-yellow-400
              rounded
              bg-gray-900
              duration-150
              hover:bg-gray-700
              active:bg-slate-200
              active:text-gray-900
              active:border-gray-900
              "
                onClick={() => removeItem(p.id)}
              >
                borrar
              </button>
            </div>
          </div>
        ))}

        {cart.length > 0 ? (
          <>
            <div className="flex my-2 p-3 shadow-md rounded font-dm-sans">
              <div className="">
                Total: $
                {cart
                  .map((i) => i.price * i.cantidad)
                  .reduce((p, c) => p + c, 0)}
              </div>
            </div>
            <Link to={'/pay'}>
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
                finalizar compra
              </button>
            </Link>
            <button
              className="
            font-dm-sans
            font-medium
            p-2
            w-full
            mt-3 md:mt-5 lg:mt-7
            text-yellow-400
            border-2
            border-yellow-400
            rounded
            bg-gray-900
            duration-150
            hover:bg-gray-700
            active:bg-slate-200
            active:text-gray-900
            active:border-gray-900
            "
              onClick={() => clearCart()}
            >
              vaciar carrito
            </button>
          </>
        ) : (
          <div className="w-full font-dm-sans">
            <div className="flex">
              <span className="m-auto text-xl">El carrito está vacio</span>
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
                      active:border-yellow-400
                      "
              >
                Ir a comprar
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
