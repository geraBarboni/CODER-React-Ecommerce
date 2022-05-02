import React from 'react'
import ItemListContainer from '../components/ItemListContainer'

const Home = () => {
  return (
    <>
      <div className="w-full h-1/2 flex bg-gray-900">
        <div className="m-auto">
          <p className="text-slate-50 font-unifrakturMaguntia text-6xl font-bold">
            Acá va el hero
          </p>
          <p className="font-dm-sans text-yellow-400">Despues lo hago bien</p>
        </div>
      </div>
      <ItemListContainer titulo={'Productos destacados'} />
    </>
  )
}

export default Home
