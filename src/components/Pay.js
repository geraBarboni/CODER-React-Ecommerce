import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

const Pay = () => {
  const { cart } = useContext(CartContext)
  const { sendOrder } = useContext(CartContext)
  const { updateStock } = useContext(CartContext)
  const [buyer, setBuyer] = useState({
    name: '',
    lastname: '',
    birthday: '',
    phone: '',
    email: '',
    province: '',
    street: '',
    streetNumber: '',
    neighborhood: '',
    tarjetNumber: '',
    cvv: '',
    cuotes: '',
  })
  const [order, setOrder] = useState({
    buyer: {},
    items: cart,
    total: cart.map((i) => i.price * i.cantidad).reduce((p, c) => p + c, 0),
  })
  const handleClientInfo = (n, v) => {
    setBuyer({ ...buyer, [n]: v })
    setOrder({ ...order, buyer: buyer })
  }
  return (
    <div className="min-h-screen w-full flex">
      <div className="w-10/12 m-auto">
        <h3 className="m-auto my-5 text-4xl font-bold font-unifrakturMaguntia">
          Carga tus datos para finalizar tu compra
        </h3>
        <div className="text-md">
          <form className="font-semibold font-dm-salt">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <input
                type="text"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="Nombres"
                name="name"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
              <input
                type="text"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="Apellidos"
                name="lastname"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
              <input
                type="date"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="Fecha de nacimiento"
                name="birthday"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <input
                type="tel"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="Telefono"
                name="phone"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
              <input
                type="email"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="Email"
                name="email"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4">
              <input
                type="text"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="Provincia"
                name="province"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
              <input
                type="text"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="Calle"
                name="street"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
              <input
                type="text"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="Numero"
                name="streetNumber"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
              <input
                type="text"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="Barrio"
                name="neighborhood"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <input
                type="text"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="Numero de tarjeta"
                name="tarjetNumber"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
              <input
                type="text"
                className="border-2 border-gray-700 rounded m-1 p-1 focus:border-yellow-400"
                placeholder="CVV"
                name="cvv"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              ></input>
              <select
                className="font-dm-salt border-2 bg-white border-gray-700 rounded m-1 p-2 focus:border-yellow-400"
                placeholder="Cuotas"
                name="cuotes"
                onChange={(e) =>
                  handleClientInfo(e.target.name, e.target.value)
                }
              >
                <option>1 x ${order.total}</option>
                <option>2 x ${order.total / 2 + (5 % order.total)}</option>
                <option>3 x ${order.total / 2 + (7 % order.total)}</option>
                <option>6 x ${order.total / 2 + (10 % order.total)}</option>
              </select>
            </div>
            <div>
              <Link to={'/finish'}>
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
                  onClick={() => {
                    sendOrder(order)
                    updateStock(cart)
                  }}
                >
                  finalizar la compra
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Pay
