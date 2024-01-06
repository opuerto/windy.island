import { SearchPagePropsInterface } from '@/app/types/definitions';
import ProductListItems from '@/app/components/ProductListItems/ProductListItems';

export default function Search({ searchParams }: SearchPagePropsInterface) {

  const query = searchParams?.q || "*";

  return (
    <div>
      <ProductListItems query={query} />
    </div>
  )
}
