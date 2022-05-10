import React, { useState } from 'react'

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
        text-gray-900
        font-dm-sans
        font-medium
        p-2
        w-full
        mt-3 md:mt-5 lg:mt-7
        border-2
      border-gray-900
        rounded
        bg-yellow-400
        duration-150
        hover:bg-gray-700
        hover:text-yellow-400
        active:bg-gray-300
        active:text-gray-500
        active:border-yellow-400
      "
        onClick={() => {
          onAdd(count)
        }}
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default Contador
