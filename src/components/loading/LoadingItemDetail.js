import React from 'react'

const LoadingItemDetail = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 animate-pulse">
      <div className="w-full h-full flex">
        <div className="m-auto w-96 h-96 rounded-lg bg-slate-200"></div>
      </div>
      <div className="flex">
        <div className="mx-auto my-10 w-96 md:mx-0 md:my-auto">
          <div className="w-full bg-slate-200 h-12 rounded-lg"></div>
          <div className="w-full bg-slate-200 h-10 my-4 rounded-lg"></div>
          <div className="w-full bg-slate-200 h-8 my-4 rounded-lg"></div>
          <div className="py-2 bg-slate-200 h-24 my-4 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingItemDetail
