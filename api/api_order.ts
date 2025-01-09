import axios from 'axios';

// L'URL de l'API, à remplacer par l'URL réelle de ton backend
const API_URL = process.env.NEXT_PUBLIC_API_URL + "/Order";

// Définition des types des données
interface Order {
  orderId: string;
  userId: string;
  status: string;
  // Ajoute ici d'autres champs selon la structure de ta commande
}

interface OrderStatusUpdateDTO {
  newStatus: string; // Ou utilise l'énumération appropriée si tu as un type défini
}

class OrderService {
  // Crée une commande à partir du panier de l'utilisateur
  static async createOrder(userId: string): Promise<Order | string> {
    try {
      const response = await axios.post(`${API_URL}/create-order/${userId}`);
      return response.data; // La commande créée et son statut
    } catch (error) {
      throw new Error(`Erreur lors de la création de la commande: ${error}`);
    }
  }

  // Récupère une commande par son ID
  static async getOrderById(orderId: string): Promise<Order | string> {
    try {
      const response = await axios.get(`${API_URL}/${orderId}`);
      return response.data; // La commande récupérée
    } catch (error) {
      throw new Error(`Erreur lors de la récupération de la commande: ${error}`);
    }
  }

  // Récupère toutes les commandes d'un utilisateur par son ID
  static async getOrdersByUserId(userId: string): Promise<Order[] | string> {
    try {
      const response = await axios.get(`${API_URL}/user/${userId}`);
      return response.data; // Liste des commandes de l'utilisateur
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des commandes de l'utilisateur: ${error}`);
    }
  }

  // Met à jour le statut d'une commande
  static async updateOrderStatus(orderId: string, newStatus: OrderStatusUpdateDTO): Promise<Order | string> {
    try {
      const response = await axios.put(`${API_URL}/update-status/${orderId}`, newStatus);
      return response.data; // Commande mise à jour
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour du statut de la commande: ${error}`);
    }
  }

  // Supprime une commande
  static async deleteOrder(orderId: string): Promise<string> {
    try {
      const response = await axios.delete(`${API_URL}/delete-order/${orderId}`);
      return response.data; // Message de confirmation
    } catch (error) {
      throw new Error(`Erreur lors de la suppression de la commande: ${error}`);
    }
  }

  // Récupère toutes les commandes dans une période spécifiée
  static async getAllOrders(startDate: Date, endDate: Date): Promise<Order[] | string> {
    try {
      const response = await axios.get(`${API_URL}/all-orders`, {
        params: { startDate: startDate.toISOString(), endDate: endDate.toISOString() },
      });
      return response.data; // Liste des commandes dans la période spécifiée
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des commandes: ${error}`);
    }
  }
}

export default OrderService;
