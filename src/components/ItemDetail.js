import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../context/cartContext'
import FinishBuy from './FinishBuy'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState([])
  const [isIn, setIsIn] = useState()
  const { addToCart } = useContext(CartContext)
  const { isInCart } = useContext(CartContext)

  useEffect(() => {
    setIsIn(isInCart(item.id))
  }, [item.id])

  const onAdd = (totalComprado) => {
    console.log(`compraste ${totalComprado} unidades`)
    setCantidad(cantidad.concat({ item: item, cantidad: totalComprado }))
    addToCart({
      id: item.id,
      cantidad: totalComprado,
      pictureURL: item.pictureURL,
      price: item.price,
      title: item.title,
      desc: item.desc,
    })
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full flex">
        <div className="m-auto w-96 h-96 rounded-lg bg-slate-100">
          <img
            src={item.pictureURL}
            alt={item.desc}
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex">
        <div className="mx-auto my-10 w-96 md:mx-0 md:my-auto">
          <p className="text-4xl font-unifrakturMaguntia font-bold my-5">
            {item.title}
          </p>
          <div>
            <p className="text-2xl font-dm-salt my-2">${item.price}</p>
          </div>
          <div>
            <p className="text-lg font-dm-salt my-2 text-gray-800">
              {item.desc}
            </p>
          </div>
          <div className="py-2 flex">
            {isIn || cantidad.length > 0 ? (
              <FinishBuy />
            ) : (
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
