import React, { useEffect, useState } from 'react'

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
    <div className="m-auto">
      <div className="justify-between m-auto">
        <button
          className="button w-8 border-2 border-gray-700 mx-5 rounded hover:shadow-md hover:bg-slate-400 ease-out duration-200 active:bg-slate-900 active:text-white"
          onClick={resHandler}
        >
          -
        </button>
        <span className="m-auto">{count}</span>
        <button
          className="button w-8 border-2 border-gray-700 mx-5 rounded hover:shadow-md hover:bg-slate-400 ease-out duration-200 active:bg-slate-900 active:text-white"
          onClick={addHandler}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Contador
