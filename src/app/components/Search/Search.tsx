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
    <div className="mt-4">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          onChange={handleQueryChange}
          aria-describedby="button-addon3" />
        <button
          className="relative z-[2] bg-white rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          type="button"
          id="button-addon3"
          onClick={handleSearch}
          data-te-ripple-init>
          Search
        </button>
      </div>
    </div>
  )
}