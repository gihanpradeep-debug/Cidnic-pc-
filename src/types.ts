export type Category = 'Laptops' | 'Custom PCs' | 'Components' | 'Graphics Cards' | 'Processors' | 'Storage' | 'Memory' | 'Phones' | 'Audio' | 'Gaming';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  isHot?: boolean;
  isNew?: boolean;
  isBestValue?: boolean;
  isLimited?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Shipped' | 'Delivered' | 'Processing';
  tracking?: string;
}
