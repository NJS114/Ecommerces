import { Appointment } from './../models/appointment/appointment';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL + "/Appointment";  // URL de l'API

class AppointmentService {
  /**
   * Récupérer tous les rendez-vous
   * @returns {Promise<Appointment[]>}
   */
  async getAllAppointments() {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des rendez-vous :", error);
      throw error;
    }
  }

  /**
   * Récupérer un rendez-vous par ID
   * @param {string} id - ID du rendez-vous
   * @returns {Promise<Appointment>}
   */
  async getAppointmentById(id : string) {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du rendez-vous avec l'ID ${id} :`, error);
      throw error;
    }
  }

  /**
   * Créer un nouveau rendez-vous
   * @param {Appointment} appointment - Données du rendez-vous
   * @returns {Promise<Appointment>}
   */
  async createAppointment(appointment : Appointment) {
    try {
      const response = await axios.post(BASE_URL, appointment);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du rendez-vous :", error);
      throw error;
    }
  }

  /**
   * Mettre à jour un rendez-vous
   * @param {string} id - ID du rendez-vous
   * @param {Appointment} appointment - Données mises à jour du rendez-vous
   * @returns {Promise<Appointment>}
   */
  async updateAppointment(id: string, appointment : Appointment) {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, appointment);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la mise à jour du rendez-vous avec l'ID ${id} :`, error);
      throw error;
    }
  }

  /**
   * Supprimer un rendez-vous
   * @param {string} id - ID du rendez-vous
   * @returns {Promise<void>}
   */
  async deleteAppointment(id: string) {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error(`Erreur lors de la suppression du rendez-vous avec l'ID ${id} :`, error);
      throw error;
    }
  }
}

export default new AppointmentService();
