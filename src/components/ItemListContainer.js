import React from 'react'
import ItemList from './ItemList'

function ItemListContainer({ titulo }) {
  return (
    <div className="mt-5">
      <div className="flex">
        <h3 className="m-auto text-2xl font-bold">{titulo}</h3>
      </div>
      <div className="">
        <ItemList />
      </div>
    </div>
  )
}

export default ItemListContainer
