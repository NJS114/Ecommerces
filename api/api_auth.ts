import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/Auth"; 

export interface RegisterDTO {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface LoginDTO {
  email: string;
  password: string;
}

export class AuthService {
  async register(userDTO: RegisterDTO): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/register`, userDTO);
      return response.data;
    } catch (error) {
      throw new Error(`Error during registration: ${error}`);
    }
  }

  async login(userDTO: LoginDTO): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/login`, userDTO);
      console.log("API Login Response: ", response.data);
      localStorage.setItem('authToken', response.data.token); // Save token securely
      return response.data;
    } catch (error) {
      console.error("Error during login: ", error);
      throw new Error(`Error during login: ${error}`);
    }
  }

  async resetPassword(email: string): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}/reset-password`, { email });
      return response.data;
    } catch (error) {
      throw new Error(`Error during password reset: ${error}`);
    }
  }

  static verifyToken(token: string): boolean {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decoded.exp * 1000;
      return expirationTime > Date.now();
    } catch (error) {
      return false;
    }
  }

  static logout(): void {
    localStorage.removeItem('authToken');
  }
}

export default AuthService;
