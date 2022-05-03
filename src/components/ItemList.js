import React, { useEffect, useState } from 'react'

import productsList from '../data/productsList'
import Item from './Item'

const ItemList = ({ category }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsList)
      }, 2000)
    })
    promesa
      .then((result) => {
        setProducts(result)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  }, [])

  return (
    <div className="w-11/12 m-auto h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {category
          ? products
              .filter((allProducts) => allProducts.category === category)
              .map((item) => <Item item={item} key={item.id} />)
          : products.map((item) => <Item item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default ItemList
