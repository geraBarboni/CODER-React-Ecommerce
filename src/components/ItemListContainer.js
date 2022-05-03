import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

function ItemListContainer({ titulo }) {
  const { id } = useParams()

  return (
    <>
      <div className="mt-5">
        <div className="flex">
          <h3 className="m-auto text-4xl font-bold font-unifrakturMaguntia">
            {id ? id : titulo}
          </h3>
        </div>
        <ItemList category={id} />
      </div>
    </>
  )
}

export default ItemListContainer
