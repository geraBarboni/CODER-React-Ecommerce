import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import LoadingCarrusel from './loading/LoadingCarrusel'

const Carrusel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [hover, setHover] = useState(true)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'carrusel')
    getDocs(itemsCollection).then((snapshot) => {
      setImages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      setLoading(false)
    })
  }, [])

  const passImages = () => {
    setTimeout(() => {
      if (currentImage < images.length - 1) {
        setCurrentImage(currentImage + 1)
      } else {
        setCurrentImage(0)
      }
    }, 3000)
  }
  if (hover) {
    passImages()
  }

  return loading == true ? (
    <LoadingCarrusel />
  ) : (
    <div className="my-10 h-auto w-full">
      <div className="w-10/12 m-auto">
        <div className="flex justify-evenly">
          <div className="w-full mx-5">
            {images.map(
              (img) =>
                currentImage === img.id && (
                  <div
                    key={img}
                    onMouseOver={() => setHover(false)}
                    onMouseOut={() => setHover(true)}
                  >
                    <img src={img.img} className="w-auto h-auto" />
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carrusel
