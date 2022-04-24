import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer({ titulo }) {
  return (
    <div className="mt-5">
      <div className="flex">
        <h3 className="m-auto text-2xl font-bold">{titulo}</h3>
      </div>

      <div className=" w-screen">
        <ItemCount stock={5} initial={1} />
        <ItemCount stock={8} initial={1} />
        <ItemCount stock={8} initial={1} />
      </div>
    </div>
  )
}

export default ItemListContainer
