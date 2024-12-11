import { Category } from '../Enums';

export interface Product {
    id: string;
    name: string;
    description: string;
    category: Category;
    price: number;
    stock: number;
    createdAt: Date;
}
