import { Product } from "@/models/product/product";

export interface IProductService {
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    createProduct(product: Product): Promise<Product>;
    updateProduct(product: Product): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
  }