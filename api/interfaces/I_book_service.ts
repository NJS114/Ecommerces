import { Book } from "@/models/book/book";

/**
 * Interface pour définir les opérations liées aux livres
 */
export interface IBookService {
  /**
   * Récupérer tous les livres
   * @returns {Promise<Book[]>} Une promesse contenant la liste des livres
   */
  getAllBooks(): Promise<Book[]>;

  /**
   * Récupérer un livre par son ID
   * @param {string} id - L'ID du livre
   * @returns {Promise<Book>} Une promesse contenant les données du livre
   */
  getBookById(id: string): Promise<Book>;

  /**
   * Créer un nouveau livre
   * @param {Book} book - Les données du livre à créer
   * @returns {Promise<Book>} Une promesse contenant les données du livre créé
   */
  createBook(book: Book): Promise<Book>;

  /**
   * Mettre à jour un livre existant
   * @param {Book} book - Les données mises à jour du livre
   * @returns {Promise<Book>} Une promesse contenant les données du livre mis à jour
   */
  updateBook(book: Book): Promise<Book>;

  /**
   * Supprimer un livre par son ID
   * @param {string} id - L'ID du livre à supprimer
   * @returns {Promise<void>} Une promesse résolue une fois le livre supprimé
   */
  deleteBook(id: string): Promise<void>;
}
