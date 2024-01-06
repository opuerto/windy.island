'use client'
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"

export default function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [queryTerm, setQueryTerm] = useState('');


  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleSearch = () => {
    router.push("/" + '?' + createQueryString('q', queryTerm))
  }

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryTerm(event.target.value);
  };

  return (
    
<div className="mt-3">   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" onChange={handleQueryChange} id="default-search" className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50  dark:placeholder-gray-400 dark:text-white" placeholder="Search..." required />
        <button type="button" onClick={handleSearch} className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-gray-700">Search</button>
    </div>
</div>

  )
}