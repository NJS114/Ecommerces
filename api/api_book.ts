import axios from "axios";
import { Book } from "@/models/book/book";
import https from "https";
import { IBookService } from "@/api/interfaces/I_book_service";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL + "/Book";
axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false, // Désactive la vérification SSL pour localhost
});

export class BookService implements IBookService {
  /**
   * Récupérer tous les livres
   * @returns {Promise<Book[]>}
   */
  async getAllBooks(): Promise<Book[]> {
    try {
      const url = `${BASE_URL}`;
      console.log("URL appelée : ", url); // Vérifiez cette URL dans la console
      const response = await axios.get<Book[]>(url);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Erreur HTTP : ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`Erreur Axios: ${error.message}`);
        if (error.response) {
          console.error(`Réponse de l'API : ${error.response.status} - ${error.response.data}`);
        }
      } else {
        console.error("Erreur inconnue : ", error);
      }
      throw error;
    }    
  }
  

  /**
   * Récupérer un livre par ID
   * @param {string} id - ID du livre
   * @returns {Promise<Book>}
   */
  async getBookById(id: string): Promise<Book> {
    const url = `${BASE_URL}`;
    console.log("URL appelée : ", url); 
    try {
      const response = await axios.get<Book>(`${url}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du livre avec l'ID ${id} :`, error);
      throw error;
    }
  }

  /**
   * Créer un nouveau livre
   * @param {Book} book - Données du livre
   * @returns {Promise<Book>}
   */
  async createBook(book: Book): Promise<Book> {
    try {
      const response = await axios.post<Book>(BASE_URL, book);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du livre :", error);
      throw error;
    }
  }

  /**
   * Mettre à jour un livre existant
   * @param {Book} book - Données mises à jour du livre
   * @returns {Promise<Book>}
   */
  async updateBook(book: Book): Promise<Book> {
    try {
      const response = await axios.put<Book>(`${BASE_URL}`, book);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du livre :", error);
      throw error;
    }
  }

  /**
   * Supprimer un livre par ID
   * @param {string} id - ID du livre
   * @returns {Promise<void>}
   */
  async deleteBook(id: string): Promise<void> {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression du livre avec l'ID ${id} :`, error);
      throw error;
    }
  }
}
