import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = () => {
  const productsList = [
    {
      id: '1',
      title: 'Item01',
      price: '$423',
      pictureURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4becce3a-a073-471f-8533-e528e28dd112/calzado-court-legacy-serena-williams-design-crew-QNlRk3.png',
    },
    {
      id: '2',
      title: 'Item02',
      price: '$423',
      pictureURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a4c0b16-76cc-4655-961e-51551069d56d/court-vision-mid-shoes-DdhXk6.png',
    },
    {
      id: '3',
      title: 'Item03',
      price: '$423',
      pictureURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/94f2017d-3be3-4d8e-b3a3-a618c443166e/air-presto-mens-shoes-JlLlWz.png',
    },
    {
      id: '4',
      title: 'Item04',
      price: '$423',
      pictureURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e8e530a3-2317-4783-819b-40860281daaf/zoomx-streakfly-zapatillas-de-competicion-asfalto-lrCMPz.png',
    },
    {
      id: '5',
      title: 'Item05',
      price: '$423',
      pictureURL:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b0cbe8ce-64f3-43ed-86b9-a18edfbecc6f/calzado-air-max-97-gNDBHx.png',
    },
  ]

  const [products, setProducts] = useState([])

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsList)
      }, 3000)
    })
    promesa
      .then((result) => {
        setProducts(result)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
  }, [])

  return (
    <div className="w-11/12 m-auto h-auto">
      Item List
      <div className="flex flex-wrap">
        {products.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            price={item.price}
            pictureURL={item.pictureURL}
          />
        ))}
      </div>
    </div>
  )
}
/*
      {starships.map((s) => (
        <StarshipDetail starship={s} key={s.url} />
      ))}
*/
export default ItemList
