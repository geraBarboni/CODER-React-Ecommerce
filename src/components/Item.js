import React from 'react'
import ItemCount from './ItemCount'

const Item = ({ title, price, pictureURL }) => {
  return (
    <div className="w-60 rounded-lg shadow-2xl m-auto my-7">
      <div className="w-60 h-60 bg-neutral-100 rounded-t-lg">
        <img src={pictureURL} className="w-full h-full rounded-lg" />
      </div>
      <div className="w-60 h-20 bg-neutral-100 p-2 flex">
        <div className="w-2/3 m-auto">
          <p className="text-xl">{title}</p>
          <p className="text-sm">desc</p>
        </div>
        <div className="w-1/3 m-auto">
          <p className="text-xl">{price}</p>
        </div>
      </div>
      <div className="w-60 h-12 flex bg-neutral-100 rounded-b-lg">
        <ItemCount stock={5} initial={0} />
      </div>
    </div>
  )
}

export default Item
