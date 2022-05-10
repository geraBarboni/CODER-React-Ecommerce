import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsList from '../data/productsList'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsList.find((m) => m.id === id))
      }, 100)
    })
    getItem
      .then((result) => {
        setProduct(result)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  }, [])
  return (
    <div className="mt-5">
      <ItemDetail item={product} />
    </div>
  )
}

export default ItemDetailContainer
