import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PaymentState } from '@/models/payment/payment_state';
import PaymentService from '@/api/api_payment';
import { PaymentRequest } from '@/models/payment/payment_request';

const initialState: PaymentState = {
  isLoading: false,
  error: null,
  paymentData: null,
  recurringPaymentData: null,
  paymentStatus: null,
};

// Thunks pour interagir avec le PaymentService
export const makePayment = createAsyncThunk(
  'payment/makePayment',
  async (payment: PaymentRequest, { rejectWithValue }) => {
    try {
      const response = await PaymentService.makePayment(payment);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Erreur inconnue lors du paiement');
    }
  }
);

export const makeRecurringPayment = createAsyncThunk(
  'payment/makeRecurringPayment',
  async (payment: PaymentRequest, { rejectWithValue }) => {
    try {
      const response = await PaymentService.makeRecurringPayment(payment);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Erreur inconnue lors du paiement récurrent');
    }
  }
);

export const checkPaymentStatus = createAsyncThunk(
  'payment/checkPaymentStatus',
  async (paymentId: string, { rejectWithValue }) => {
    try {
      const response = await PaymentService.checkPaymentStatus(paymentId);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Erreur inconnue lors de la vérification du statut du paiement');
    }
  }
);

export const cancelPayment = createAsyncThunk(
  'payment/cancelPayment',
  async (paymentId: string, { rejectWithValue }) => {
    try {
      const response = await PaymentService.cancelPayment(paymentId);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Erreur inconnue lors de l\'annulation du paiement');
    }
  }
);

export const refundPayment = createAsyncThunk(
  'payment/refundPayment',
  async (paymentId: string, { rejectWithValue }) => {
    try {
      const response = await PaymentService.refundPayment(paymentId);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Erreur inconnue lors du remboursement');
    }
  }
);

// Slice Redux
const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // For makePayment
    builder
      .addCase(makePayment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.paymentData = action.payload;
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // For makeRecurringPayment
    builder
      .addCase(makeRecurringPayment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(makeRecurringPayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recurringPaymentData = action.payload;
      })
      .addCase(makeRecurringPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // For checkPaymentStatus
    builder
      .addCase(checkPaymentStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkPaymentStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.paymentStatus = action.payload;
      })
      .addCase(checkPaymentStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // For cancelPayment
    builder
      .addCase(cancelPayment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(cancelPayment.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(cancelPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // For refundPayment
    builder
      .addCase(refundPayment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refundPayment.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(refundPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default paymentSlice.reducer;
