import React, { useEffect, useState } from 'react'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import Item from './Item'
import LoadingItem from './loading/LoadingItem'

const ItemList = ({ category }) => {
  const [products, setProducts] = useState([])
  const [productsFilter, setProductsFilter] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const db = getFirestore()
    if (category) {
      //console.log('existe una categoria')
      //Filtrados
      const q = query(
        collection(db, 'items'),
        where('category', '==', category),
      )
      getDocs(q).then((snapshot) => {
        setProductsFilter(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
        )
        setLoading(false)
      })
    } else {
      //Todos los items
      const itemsCollection = collection(db, 'items')
      getDocs(itemsCollection).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))

        setLoading(false)
      })
    }
  }, [category])

  return (
    <div className="w-11/12 m-auto h-auto">
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <LoadingItem />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {category
          ? productsFilter.map((item) => <Item item={item} key={item.id} />)
          : products.map((item) => <Item item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default ItemList
