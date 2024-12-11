export interface Appointment {
    id: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    title: string;
    description: string;
    location: string;
    isConfirmed: boolean;
    customerId: number;
    user: UserSummary;
}

export interface UserSummary {
    userId: string;
    firstname: string;
    lastname: string;
    email: string;
}
