export interface IProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface IProductProps {
  product: IProduct;
}

export interface IProductLayout {
  // If a component is product page content 'isProductContent' is set to true
  isProductContent: boolean;
}
