import React from 'react'
import { useParams } from 'react-router-dom'
import BrandsNav from './BrandsNav'
import ItemList from './ItemList'

function ItemListContainer({ titulo }) {
  const { category } = useParams()
  const { brand } = useParams()

  return (
    <>
      <div className="mt-5 min-h-screen">
        {category || brand ? <></> : <BrandsNav />}
        <div className="flex">
          <h3 className="m-auto text-4xl font-bold font-unifrakturMaguntia">
            {category || brand ? brand || category : titulo}
          </h3>
        </div>
        <ItemList category={category} brand={brand} />
      </div>
    </>
  )
}

export default ItemListContainer
