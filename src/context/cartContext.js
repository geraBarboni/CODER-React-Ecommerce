import React from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

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

  const context = {
    cart,
    addToCart,
    removeItem,
    clearCart,
    isInCart,
  }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}
