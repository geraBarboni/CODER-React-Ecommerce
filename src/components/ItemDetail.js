import React, { useState } from 'react'
import FinishBuy from './FinishBuy'
import ItemCount from './ItemCount'
const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState([])

  const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad} unidades de: `, item)
    setCantidad((cantidad) =>
      cantidad.concat({ item: item, cantidad: cantidad }),
    )
  }
  console.log(cantidad)

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full flex">
        <div className="m-auto w-96 h-96 rounded-lg bg-slate-100">
          <img src={item.pictureURL} className="w-full h-full rounded-lg" />
        </div>
      </div>
      <div className="flex">
        <div className="mx-auto my-10 w-96 md:mx-0 md:my-auto">
          <p className="text-4xl font-unifrakturMaguntia font-bold my-5">
            {item.title}
          </p>
          <div>
            <p className="text-2xl font-dm-salt my-2">{item.price}</p>
          </div>
          <div>
            <p className="text-lg font-dm-salt my-2 text-gray-800">
              {item.desc}
            </p>
          </div>
          <div className="py-2 flex">
            {cantidad.length >= 1 ? (
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
/*
const ItemDetail = ({ item }) => {
  const [productoAgregado, setProductoAgregado] = useState([])

  const onAdd = (cantidad) => {
    console.log(`compraste ${cantidad} unidades de: `, item)
    setProductoAgregado((productoAgregado) =>
      productoAgregado.concat({ item: item, cantidad: cantidad }),
    )
  }
  console.log(productoAgregado)

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 border-2 border-blue-500">
      <div className="w-full h-full flex">
        <div className="m-auto w-96 h-96 rounded-lg bg-slate-100">
          <img src={item.pictureURL} className="w-full h-full rounded-lg" />
        </div>
      </div>
      <div className="flex">
        <div className="mx-auto my-10 w-96 md:mx-0 md:my-auto">
          <p className="text-4xl font-unifrakturMaguntia font-bold my-5">
            {item.title}
          </p>
          <div>
            <p className="text-2xl font-dm-salt my-2">{item.price}</p>
          </div>
          <div>
            <p className="text-lg font-dm-salt my-2 text-gray-800">
              {item.desc}
            </p>
          </div>
          <div className="py-2 flex">
            {productoAgregado.length >= 1 ? (
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
*/

export default ItemDetail
