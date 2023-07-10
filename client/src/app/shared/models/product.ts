export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  featured?: boolean;
  productType: string;
  productBrand: string;
  rating?: boolean;
  new?: boolean;
}
