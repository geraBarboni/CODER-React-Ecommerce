import './App.css'
import CartWidget from './components/CartWidget'
import Item from './components/Item'
import ItemList from './components/ItemList'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar>
        <CartWidget />
      </NavBar>

      <ItemListContainer titulo="Productos" />
    </div>
  )
}

export default App
