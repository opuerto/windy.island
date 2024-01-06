import Image from 'next/image';
import Search from '@/app/components/Search/Search';
export default function Toolbar() {
  return (
    <nav className="flex items-center flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
          src="/w.svg"
          width={400}
          height={250}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop and mobile versions"
        />
        <Image
          src="/w.svg"
          width={200}
          height={100}
          className="block md:hidden"
          alt="Screenshot of the dashboard project showing mobile version"
        />
      </div>
      <div className="lg:w-6/12 block lg:items-center">
        <div>
         <Search />
        </div>
      </div>
    </nav>
  )
}
