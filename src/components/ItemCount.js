import React, { useEffect, useState } from 'react'

const Contador = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial))

  const addHandler = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const resHandler = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  //Count es el valor
  //SetCount es la funcion que modifica el valor de Count
  //useState(valor inicial)

  return (
    <div
      className="w-full
      font-dm-sans
      font-medium"
    >
      <div className="m-auto w-full flex justify-between">
        <button
          className="
          text-yellow-400
          w-8
          h-8
          border-2
         border-yellow-400
          rounded
          bg-gray-900
          duration-150
          hover:bg-gray-700
          active:bg-slate-200
          active:text-gray-900
          active:border-gray-900
          "
          onClick={resHandler}
        >
          -
        </button>
        <span className="m-auto">{count}</span>
        <button
          className="
          text-yellow-400
          w-8
          h-8
          border-2
         border-yellow-400
          rounded
          bg-gray-900
          duration-150
          hover:bg-gray-700
          active:bg-slate-200
          active:text-gray-900
          active:border-gray-900
          "
          onClick={addHandler}
        >
          +
        </button>
      </div>
      <button
        className="
        text-yellow-400
        font-dm-sans
        font-medium
        p-2
        w-full
        mt-3 md:mt-5 lg:mt-7
        border-2
       border-yellow-400
        rounded
        bg-gray-900
        duration-150
        hover:bg-gray-700
        active:bg-slate-200
        active:text-gray-900
        active:border-gray-900
      "
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default Contador
