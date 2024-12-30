import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + "/Auth"; 

// Interface pour représenter les informations de l'utilisateur
interface UserDTO {
  id:string;
  email: string;
  password: string;
  fullname?: string; // Facultatif pour l'inscription
}

class AuthService {
  // Inscription d'un utilisateur
  static async register(userDTO: UserDTO): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/register`, userDTO);
      return response.data; // Renvoie les données de l'utilisateur inscrit
    } catch (error) {
      throw new Error(`Erreur lors de l'inscription : ${error}`);
    }
  }

  // Connexion d'un utilisateur
  static async login(userDTO: UserDTO): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/login`, userDTO);
      // Enregistrez le token dans les cookies ou dans le stockage local
      localStorage.setItem('authToken', response.data.token);
      return response.data; // Renvoie les données de la réponse, y compris le token
    } catch (error) {
      throw new Error(`Erreur lors de la connexion : ${error}`);
    }
  }

  // Réinitialisation du mot de passe
  static async resetPassword(email: string): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/reset-password`, { email });
      return response.data; // Renvoie les données de l'email envoyé pour la réinitialisation
    } catch (error) {
      throw new Error(`Erreur lors de la réinitialisation du mot de passe : ${error}`);
    }
  }

  // Vérification du token JWT
  static verifyToken(token: string): boolean {
    try {
      // Décodage du token JWT pour vérifier la validité (si nécessaire)
      const decoded = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decoded.exp * 1000;
      return expirationTime > Date.now();
    } catch (error) {
      return false;
    }
  }

  // Déconnexion de l'utilisateur
  static logout(): void {
    localStorage.removeItem('authToken'); // Retire le token du stockage local
  }
}

export default AuthService;
