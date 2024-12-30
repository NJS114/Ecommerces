import axios from "axios";
import https from "https";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL + "/Basket";

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false, // Désactive la vérification SSL pour localhost
});

export class BasketService {
  /**
   * Récupérer le panier par ID utilisateur
   * @param {string} userId - ID de l'utilisateur
   * @returns {Promise<any>}
   */
  async getBasketByUserId(userId: string) {
    try {
      const response = await axios.get(`${BASE_URL}/get-basket/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du panier pour l'utilisateur ${userId} :`, error);
      throw error;
    }
  }

  /**
   * Ajouter un article au panier
   * @param {string} userId - ID de l'utilisateur
   * @param {object} basketItem - Détails de l'article à ajouter
   * @returns {Promise<any>}
   */
  async addToBasket(userId: string, basketItem:[]) {
    try {
      const response = await axios.post(`${BASE_URL}/add-to-basket/${userId}`, basketItem);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article au panier :", error);
      throw error;
    }
  }

  /**
   * Supprimer un article du panier
   * @param {string} userId - ID de l'utilisateur
   * @param {string} bookId - ID de l'article
   * @returns {Promise<any>}
   */
  async removeFromBasket(userId: string, bookId: string) {
    try {
      const response = await axios.post(`${BASE_URL}/remove-from-basket/${userId}/${bookId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la suppression de l'article du panier :", error);
      throw error;
    }
  }

  /**
   * Mettre à jour la quantité d'un article dans le panier
   * @param {string} userId - ID de l'utilisateur
   * @param {string} bookId - ID de l'article
   * @param {number} newQuantity - Nouvelle quantité
   * @returns {Promise<any>}
   */
  async updateItemQuantity(userId: string, bookId:string, newQuantity: number) {
    try {
      const response = await axios.post(`${BASE_URL}/update-item-quantity/${userId}/${bookId}`, { newQuantity });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la quantité de l'article :", error);
      throw error;
    }
  }

  /**
   * Vider le panier
   * @param {string} userId - ID de l'utilisateur
   * @returns {Promise<any>}
   */
  async emptyBasket(userId: string) {
    try {
      const response = await axios.post(`${BASE_URL}/empty-basket/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors du vidage du panier :", error);
      throw error;
    }
  }

  /**
   * Confirmer l'achat
   * @param {string} userId - ID de l'utilisateur
   * @returns {Promise<any>}
   */
  async confirmPurchase(userId: string) {
    try {
      const response = await axios.post(`${BASE_URL}/confirm-purchase/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la confirmation de l'achat :", error);
      throw error;
    }
  }

  /**
   * Mettre à jour le statut d'un article
   * @param {string} userId - ID de l'utilisateur
   * @param {string} bookId - ID de l'article
   * @param {string} newStatus - Nouveau statut
   * @returns {Promise<any>}
   */
  async updateItemStatus(userId:string, bookId: string, newStatus: string) {
    try {
      const response = await axios.post(`${BASE_URL}/update-item-status/${userId}/${bookId}`, { newStatus });
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du statut de l'article :", error);
      throw error;
    }
  }

  /**
   * Appliquer une remise après achat
   * @param {string} userId - ID de l'utilisateur
   * @returns {Promise<any>}
   */
  async applyDiscountAfterPurchase(userId: string) {
    try {
      const response = await axios.post(`${BASE_URL}/apply-discount/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de l'application de la remise :", error);
      throw error;
    }
  }
}
