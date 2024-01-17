"use client"
import React from 'react'
import Link from 'next/link'
function Chair({prod}) {
  return (
    <Link href={`/details/${prod.id}`}>
    <div className="hover:shadow-lg cursor-pointer max-w-[350px] bg-white border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="block w-[350px] sm:min-w-[350px] h-[300px]" src={prod.image} alt="" />
    <div className="p-5">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prod.title}</h5>
      
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{prod.price} Rupees</p>
        <div className="w-full flex justify-center items-center">
          </div>
      </div>
    </div>
    </Link>
  )
}

export default Chair