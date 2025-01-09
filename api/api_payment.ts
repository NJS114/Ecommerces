import { PaymentRequest } from './../models/payment/payment_request';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/Payment"; // URL de l'API pour le paiement



export class PaymentService {
  static async makePayment(paymentRequest: PaymentRequest): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/payment`, paymentRequest);
      if (response.status === 200 && response.data.success) {
        return response.data; 
      } else {
        throw new Error(response.data.errorMessage || 'Échec du paiement');
      }
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Erreur serveur : ${error.response.data.errorMessage || error.message}`);
      } else if (error.request) {
        throw new Error('Erreur de connexion au serveur : Aucune réponse reçue');
      } else {
        throw new Error(`Erreur lors du paiement : ${error.message}`);
      }
    }
  }
  static async Payment(): Promise<any> {
    try {
      // Appel à l'API pour créer la session de paiement
      const response = await axios.post(`${API_URL}/create-checkout-session`);
  
      if (response.status === 200 && response.data.url) {
        // Rediriger l'utilisateur vers l'URL de Stripe Checkout pour finaliser le paiement
        return response.data.url; 
      } else {
        throw new Error(response.data.errorMessage || 'Échec du paiement');
      }
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Erreur serveur : ${error.response.data.errorMessage || error.message}`);
      } else if (error.request) {
        throw new Error('Erreur de connexion au serveur : Aucune réponse reçue');
      } else {
        throw new Error(`Erreur lors du paiement : ${error.message}`);
      }
    }
  }
  
  static async makeCardPayment(paymentMethod: any): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/payment-card`, paymentMethod);
      if (response.status === 200 && response.data.success) {
        return response.data; // Retourner la réponse de paiement réussi
      } else {
        throw new Error(response.data.errorMessage || 'Échec du paiement par carte');
      }
    } catch (error: any) {
      if (error.response) {
        throw new Error(`Erreur serveur : ${error.response.data.errorMessage || error.message}`);
      } else if (error.request) {
        throw new Error('Erreur de connexion au serveur : Aucune réponse reçue');
      } else {
        throw new Error(`Erreur lors du paiement par carte : ${error.message}`);
      }
    }
  }

  
}

export default PaymentService;
