import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <div className=" w-60 rounded-md shadow-md m-auto my-5 font-dm-salt hover:shadow-2xl duration-200">
      <Link to={`/item/${item.id}`}>
        <div className="w-60 h-60 bg-white rounded-t-lg">
          <img src={item.pictureURL} className="w-full h-full rounded-t-lg" />
        </div>
        <div className="w-60 h-20 bg-neutral-100 p-2 rounded-b-lg flex">
          <div className="w-2/3 m-auto">
            <p className="text-lg">{item.title}</p>
          </div>
          <div className="w-1/3 flex">
            <p className="text-lg m-auto">{item.price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Item
