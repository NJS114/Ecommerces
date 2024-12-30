import axios from 'axios';

// L'URL de l'API, change-la selon ton endpoint réel
const API_URL = process.env.REACT_APP_API_URL +"/Newsletter";

interface NewsletterDTO {
  subject: string;
  body: string;
}

class NewsletterService {
  // Envoie une newsletter à tous les utilisateurs
  static async sendNewsletterToAllUsers(newsletterDTO: NewsletterDTO): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/newsletter`, {
        subject: newsletterDTO.subject,
        body: newsletterDTO.body,
      });
      return response.data; // Renvoie la réponse de l'API (message de succès)
    } catch (error) {
      throw new Error(`Erreur lors de l'envoi de la newsletter : ${error}`);
    }
  }

  // Envoie une newsletter à un utilisateur spécifique
  static async sendNewsletterToUser(email: string, newsletterDTO: NewsletterDTO): Promise<any> {
    try {
      if (!email || !newsletterDTO.subject || !newsletterDTO.body) {
        throw new Error('L\'email, le sujet et le corps du message sont requis.');
      }

      const response = await axios.post(`${API_URL}/sendmessage`, {
        email: email,
        subject: newsletterDTO.subject,
        body: newsletterDTO.body,
      });

      return response.data; // Renvoie la réponse de l'API (message de succès)
    } catch (error) {
      throw new Error(`Erreur lors de l'envoi de la newsletter à l'utilisateur : ${error}`);
    }
  }
}

export default NewsletterService;
