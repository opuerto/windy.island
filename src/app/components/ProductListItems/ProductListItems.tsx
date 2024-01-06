import { ProductListItemsPropsInterface, MockDataResponseInterface } from '@/app/types/definitions'
import { search } from '@/app/api/algoliaAPI/algoliaAPI';
import ProductCard from '@/app/components/ProductCard/ProductCard';
export default async function ProductListItems({ query }: ProductListItemsPropsInterface) {
  
  const fetchProducts = async (): Promise<any> => {
    const response = await search(query);
    return response;
  };

  const products: MockDataResponseInterface = await fetchProducts();

  const productList = products.hits.map((product) => {
    return (
      <ProductCard key={product.id} product={product} />
    )
  });

  return (
    <div>
      <div className="grid my-5 mx-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {productList.length ? productList: <div className="text-center"><h3 className="text-2xl">No products found</h3></div>}
      </div>
    </div>
  )
}
