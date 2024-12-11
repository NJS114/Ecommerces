import { Product } from "./product";

export interface ProductState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }