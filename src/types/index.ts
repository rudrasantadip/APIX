export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: number;
  userId: number;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  orders: Order[];
  wishlist: Product[];
  loyaltyPoints: number;
}

export interface Order {
  id: number;
  items: CartItem[];
  total: number;
  status: string;
  date: string;
  shippingAddress: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}