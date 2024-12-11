import { Appointment } from "@/models/appointment/appointment";

export interface IAppointmentService {
    getAllAppointments(): Promise<Appointment[]>;  // Récupère tous les rendez-vous
    getAppointmentById(id: string): Promise<Appointment>;  // Récupère un rendez-vous par ID
    createAppointment(appointment: Appointment): Promise<Appointment>;  // Crée un rendez-vous
    updateAppointment(id: string, appointment: Appointment): Promise<Appointment>;  // Met à jour un rendez-vous
    deleteAppointment(id: string): Promise<void>;  // Supprime un rendez-vous
  }
  