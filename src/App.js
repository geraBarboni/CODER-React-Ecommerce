import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CartWidget from './components/CartWidget'
import NavBar from './components/generals/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
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
          <Route
            path="/cetegory"
            element={<ItemListContainer titulo={'Zapatillas'} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
