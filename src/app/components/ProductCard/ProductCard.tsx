'use client';
import { ProductCardPropsInterface } from '@/app/types/definitions';
import Link from 'next/link'
import Image from 'next/image';

export default function ProductCard({ product }: ProductCardPropsInterface) {

  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col">
      <div className="relative"><Link href={`/pdp/${product.id}`}>
        <Image className="w-full"
          src={product.image}
          width={100}
          height={100}
          alt={product.name} />
        <div
          className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
        </div>
      </Link>
        <a href="#!">
          <div
            className="text-xs absolute top-0 right-0 bg-green-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            Buy Now
          </div>
        </a>
      </div>
      <div className="px-6 py-4 mb-auto">
        <a href="#"
          className="font-medium text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out inline-block mb-2">{product.brand}</a>
        <p className="text-gray-500 text-sm">
          {product.name}
        </p>
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">

          <span className="ml-1">{product.price} DKK</span>
        </span>
      </div>
    </div>



  )
}
