export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  amount: number;
  score: number;
  shippingValue: number;
}

export interface Stock {
  id: number;
  amount: number;
}
