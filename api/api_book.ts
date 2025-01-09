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
      console.log("URL appelée : ", url);
      const response = await axios.get<Book[]>(url);
      if (response.status === 200) {
        if (!response.data || response.data.length === 0) {
          throw new Error("Aucun livre trouvé.");
        }
        return response.data;
      } else {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des livres : ", error);
      throw new Error("Une erreur est survenue lors de la récupération des livres.");
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
  async getBooksByCategory(category: string): Promise<Book[]> {
    try {
      const url = `${BASE_URL}/category/${category}`;
      console.log("URL appelée : ", url);
      const response = await axios.get<Book[]>(url);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des livres de la catégorie ${category} :`, error);
      throw error;
    }
  }
  async getBooksByPublisher(publisher: string): Promise<Book[]> {
    try {
      const url = `${BASE_URL}/editor/${publisher}`;
      console.log("URL appelée : ", url);
      const response = await axios.get<Book[]>(url);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des livres de l'édition ${publisher} :`, error);
      throw error;
    }
  }
  /**
   * Récupérer les livres par auteur
   * @param {string} author - Nom de l'auteur
   * @returns {Promise<Book[]>}
   */
  async getBooksByAuthor(author: string): Promise<Book[]> {
    try {
      const url = `${BASE_URL}/author/${author}`;
      console.log("URL appelée : ", url);
      const response = await axios.get<Book[]>(url);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des livres de l'auteur ${author} :`, error);
      throw error;
    }
  }

  /**
   * Récupérer les livres par titre
   * @param {string} title - Titre du livre
   * @returns {Promise<Book[]>}
   */
  async getBooksByTitle(title: string): Promise<Book[]> {
    try {
      const url = `${BASE_URL}/title/${title}`;
      console.log("URL appelée : ", url);
      const response = await axios.get<Book[]>(url);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des livres avec le titre ${title} :`, error);
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
   * Récupérer les livres par catégorie (slug)
   * @param {string} slug - Slug de la catégorie
   * @returns {Promise<Book[]>}
   */
  async getBooksByCategorySlug(slug: string): Promise<Book[]> {
    try {
      const url = `${BASE_URL}/category/${slug}`;
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
