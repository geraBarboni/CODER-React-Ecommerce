import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BrandsNav = () => {
  const [brands, setBrands] = useState([])
  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'brands')
    getDocs(itemsCollection).then((snapshot) => {
      setBrands(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })
  }, [])

  return (
    <div className="w-full flex justify-evenly my-5">
      {brands.map((b) => (
        <Link to={`/brand/${b.brand}`} key={b.id}>
          <div className="w-16 h-16 rounded flex shadow-md hover:shadow-lg">
            <img
              src={b.pictureURL}
              alt={b.brand}
              className="p-2 min-w-14 max-h-14 m-auto"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BrandsNav
