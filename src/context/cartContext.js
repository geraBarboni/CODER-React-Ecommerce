import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  snapshotEqual,
  updateDoc,
} from 'firebase/firestore'
import React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [orderId, setOrderId] = useState('')

  const addToCart = (product) => {
    setCart(cart.concat(product))
  }

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (id) => {
    if (cart.some((p) => p.id === id)) {
      return true
    } else {
      return false
    }
  }

  const sendOrder = (order) => {
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
  }

  const updateStock = (c) => {
    const db = getFirestore()
    let p = {}
    c.forEach((product) => {
      const productRef = doc(db, 'items', product.id)
      getDoc(productRef).then((snapshot) => {
        if (snapshot.exists()) {
          p = { id: snapshot.id, ...snapshot.data() }
        }
        updateDoc(productRef, { stock: p.stock - product.cantidad })
      })
    })
    clearCart()
  }

  const context = {
    cart,
    addToCart,
    removeItem,
    clearCart,
    isInCart,
    sendOrder,
    updateStock,
    orderId,
  }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}
