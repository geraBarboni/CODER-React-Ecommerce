import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CartWidget from './components/CartWidget'
import NavBar from './components/generals/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { CartProvider } from './context/cartContext'

function App() {
  function onAdd(evt) {
    evt.stopPropagation()
  }

  return (
    <CartProvider>
      <div className="w-full h-screen">
        <BrowserRouter>
          <NavBar>
            <CartWidget />
          </NavBar>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer titulo={'Todos los productos'} />}
            />
            <Route path="/cetegory/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  )
}

export default App
