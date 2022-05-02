import React from 'react'
import ItemList from './ItemList'

function ItemListContainer({ titulo }) {
  return (
    <>
      <div className="mt-5">
        <div className="flex">
          <h3 className="m-auto text-4xl font-bold font-unifrakturMaguntia">
            {titulo}
          </h3>
        </div>
        <ItemList />
      </div>
    </>
  )
}

export default ItemListContainer
