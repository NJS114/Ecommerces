export interface PaymentState {
    isLoading: boolean;
    error: string | null;
    paymentData: any;  // Vous pouvez remplacer 'any' par le type spécifique que vous attendez
    recurringPaymentData: any;  // Idem pour les paiements récurrents
    paymentStatus: any;
  }
  