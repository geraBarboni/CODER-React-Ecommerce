import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsList from '../data/productsList'
import ItemDetail from './ItemDetail'
import LoadingItemDetail from './loading/LoadingItemDetail'

function ItemDetailContainer() {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(id)
  useEffect(() => {
    const db = getFirestore()
    const producto = doc(db, 'items', id)
    getDoc(producto).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct(snapshot.data())
        setLoading(false)
      }
    })
  }, [])
  return (
    <div className="mt-5">
      {loading ? <LoadingItemDetail /> : <ItemDetail item={product} />}
    </div>
  )
}

export default ItemDetailContainer
