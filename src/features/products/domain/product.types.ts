export type ProductCategory =
  | 'clothing'
  | 'shoes'
  | 'bags'
  | 'lingerie'
  | 'watch'
  | 'hoodies';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: ProductCategory;
};

export type ProductsState = {
  list: Product[];
  selected: Product | null;
  loadingList: boolean;
  loadingDetails: boolean;
  errorList: string | null;
  errorDetails: string | null;
};
