export interface IProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  count_in_stock: number;
  rating: number;
  num_reviews: number;
}

export interface IProductProps {
  product: IProduct;
}

export interface IProductLayout {
  // If a component is product page content 'isProductContent' is set to true
  isProductContent: boolean;
}

// This interface is for initial state of product slice
export interface IProductState {
  products: IProduct[];
  isLoading: boolean;
}
