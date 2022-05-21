import React from 'react'

const LoadingCarrusel = () => {
  return (
    <div className="my-10 h-auto w-full">
      <div className="w-10/12 m-auto">
        <div className="flex justify-evenly">
          <div className="w-full mx-5">
            <div className="w-auto h-28 sm:h-28 md:h-38 xl:h-64 2xl:h-96 bg-slate-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingCarrusel
