import { PaymentRequest } from './../models/payment/payment_request';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + "/Payment"; // URL de l'API pour le paiement



class PaymentService {
  // Effectuer un paiement
  static async makePayment(paymentRequest: PaymentRequest): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/make-payment`, paymentRequest);
      return response.data; // Renvoie les informations du paiement effectué (par exemple, statut, ID de transaction)
    } catch (error) {
      throw new Error(`Erreur lors du paiement : ${error}`);
    }
  }

  // Effectuer un paiement récurrent
  static async makeRecurringPayment(paymentRequest: PaymentRequest): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/make-recurring-payment`, paymentRequest);
      return response.data; // Renvoie les informations du paiement récurrent
    } catch (error) {
      throw new Error(`Erreur lors du paiement récurrent : ${error}`);
    }
  }

  // Vérifier l'état d'un paiement
  static async checkPaymentStatus(paymentId: string): Promise<any> {
    try {
      const response = await axios.get(`${API_URL}/payment-status/${paymentId}`);
      return response.data; // Renvoie l'état du paiement (par exemple, réussi, échoué)
    } catch (error) {
      throw new Error(`Erreur lors de la vérification du statut du paiement : ${error}`);
    }
  }

  // Annuler un paiement
  static async cancelPayment(paymentId: string): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/cancel-payment`, { paymentId });
      return response.data; // Renvoie la réponse de l'annulation (par exemple, confirmation de l'annulation)
    } catch (error) {
      throw new Error(`Erreur lors de l'annulation du paiement : ${error}`);
    }
  }

  // Traitement du remboursement d'un paiement
  static async refundPayment(paymentId: string): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/refund-payment`, { paymentId });
      return response.data; // Renvoie les informations du remboursement
    } catch (error) {
      throw new Error(`Erreur lors du remboursement : ${error}`);
    }
  }
}

export default PaymentService;
