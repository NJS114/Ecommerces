import axios from "axios";
import { User } from "@/models/user/user";

const BASE_URL = process.env.REACT_APP_API_URL + "/User";

export class UserService {
  /**
   * Récupérer tous les utilisateurs avec pagination
   * @param {number} page - Numéro de page
   * @param {number} pageSize - Taille de la page
   * @returns {Promise<User[]>}
   */
  async getAllUsers(page: number = 1, pageSize: number = 10): Promise<User[]> {
    try {
      const response = await axios.get<User[]>(BASE_URL, {
        params: { page, pageSize },
      });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error);
      throw error;
    }
  }

  /**
   * Récupérer un utilisateur par ID
   * @param {string} id - ID de l'utilisateur
   * @returns {Promise<User>}
   */
  async getUserById(id: string): Promise<User> {
    try {
      const response = await axios.get<User>(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'utilisateur avec l'ID ${id} :`, error);
      throw error;
    }
  }

  /**
   * Créer un nouvel utilisateur
   * @param {User} user - Données de l'utilisateur
   * @returns {Promise<void>}
   */
  async createUser(user: User): Promise<void> {
    try {
      await axios.post(BASE_URL, user);
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur :", error);
      throw error;
    }
  }

  /**
   * Mettre à jour un utilisateur
   * @param {string} id - ID de l'utilisateur
   * @param {User} user - Nouvelles données de l'utilisateur
   * @returns {Promise<void>}
   */
  async updateUser(id: string, user: User): Promise<void> {
    try {
      await axios.put(`${BASE_URL}/${id}`, user);
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de l'utilisateur avec l'ID ${id} :`, error);
      throw error;
    }
  }

  /**
   * Supprimer un utilisateur
   * @param {string} id - ID de l'utilisateur
   * @returns {Promise<void>}
   */
  async deleteUser(id: string): Promise<void> {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'utilisateur avec l'ID ${id} :`, error);
      throw error;
    }
  }
}

export default new UserService();
