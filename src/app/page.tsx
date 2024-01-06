import { SearchPagePropsInterface } from '@/app/types/definitions';
import ProductListItems from '@/app/components/ProductListItems/ProductListItems';
import ListSkeletons from '@/app/components/Skeletons/ListSkeletons';
import { Suspense } from 'react';

export default function Search({ searchParams }: SearchPagePropsInterface) {

  const query = searchParams?.q || "*";

  return (
    <div>
      <Suspense fallback={<ListSkeletons />}>
        <ProductListItems query={query} />
      </Suspense>

    </div>
  )
}
