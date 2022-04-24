import React, { useState } from 'react'

const Contador = ({ stock, initial }) => {
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
    <div className="m-3 h-80 w-56 ">
      <div className="bg-gray-300 h-5/6 w-56 my-2 rounded flex">
        <p className="m-auto">stock: {stock}</p>
      </div>
      <div className="mx-8 justify-between mt-auto">
        <button
          className="button w-8 border-2 border-gray-700 m-5 rounded hover:shadow-md hover:bg-slate-400 ease-out duration-200 active:bg-slate-900 active:text-white"
          onClick={resHandler}
        >
          -
        </button>
        <span className="m-auto">{count}</span>
        <button
          className="button w-8 border-2 border-gray-700 m-5 rounded hover:shadow-md hover:bg-slate-400 ease-out duration-200 active:bg-slate-900 active:text-white"
          onClick={addHandler}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Contador
