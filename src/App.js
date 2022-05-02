import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CartWidget from './components/CartWidget'
import NavBar from './components/generals/NavBar'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import Product from './pages/Product'

function App() {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <NavBar>
          <CartWidget />
        </NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/product/:id" element={<Product />} />
          {/*
          <Route path="/products/:productParam" element={<Product />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
           */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
