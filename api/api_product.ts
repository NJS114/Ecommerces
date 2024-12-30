import axios from "axios";
import { Product } from "@/models/product/product";
import { IProductService } from "@/api/interfaces/I_product_service";

const BASE_URL = process.env.REACT_APP_API_URL + "/Product";

export class ProductService implements IProductService {
  /**
   * Récupérer tous les produits
   * @returns {Promise<Product[]>}
   */
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
      throw error;
    }
  }

  /**
   * Récupérer un produit par ID
   * @param {string} id - ID du produit
   * @returns {Promise<Product>}
   */
  async getProductById(id: string): Promise<Product> {
    try {
      const response = await axios.get<Product>(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du produit avec l'ID ${id} :`, error);
      throw error;
    }
  }

  /**
   * Créer un nouveau produit
   * @param {Product} product - Données du produit
   * @returns {Promise<Product>}
   */
  async createProduct(product: Product): Promise<Product> {
    try {
      const response = await axios.post<Product>(BASE_URL, product);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du produit :", error);
      throw error;
    }
  }

  /**
   * Mettre à jour un produit existant
   * @param {Product} product - Données mises à jour du produit
   * @returns {Promise<Product>}
   */
  async updateProduct(product: Product): Promise<Product> {
    try {
      const response = await axios.put<Product>(`${BASE_URL}`, product);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du produit :", error);
      throw error;
    }
  }

  /**
   * Supprimer un produit par ID
   * @param {string} id - ID du produit
   * @returns {Promise<void>}
   */
  async deleteProduct(id: string): Promise<void> {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression du produit avec l'ID ${id} :`, error);
      throw error;
    }
  }
}
