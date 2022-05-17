import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CartWidget from './components/CartWidget'
import NavBar from './components/generals/NavBar'
import Footer from './components/generals/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { CartProvider } from './context/cartContext'
import Pay from './components/Pay'
import FinishPay from './components/FinishPay'

function App() {
  function onAdd(evt) {
    evt.stopPropagation()
  }

  return (
    <div className="w-full min-h-screen">
      <CartProvider>
        <BrowserRouter>
          <NavBar>
            <CartWidget />
          </NavBar>

          <Routes>
            <Route
              path="/"
              element={<ItemListContainer titulo={'Todos los productos'} />}
            />
            <Route path="/cetegory/:category" element={<ItemListContainer />} />
            <Route path="/brand/:brand" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/finish" element={<FinishPay />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
