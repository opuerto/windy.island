export interface SearchPagePropsInterface {
  params?: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}

export interface ProductListItemsPropsInterface {
  query: string;
}

export interface ProductCardPropsInterface {
  product: ProductInteface;
}

export interface ProductInteface {
  id: number;
  name: string;
  brand: string;
  capacity: string;
  price: number;
  image: string;
}

export interface MockDataResponseInterface {
  hits: ProductInteface[];
}