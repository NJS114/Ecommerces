import { UserService } from '@/api/api_user';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/models/user/user';  // Assurez-vous que le chemin est correct
import { UserState } from '@/models/user/user_state';
import api_user from '@/api/api_user';



// État initial
const initialState: UserState = {
  users: [],
  status: 'idle',
  error: null,
};

// Action asynchrone pour récupérer les utilisateurs
export const fetchUsers = createAsyncThunk<User[], { page: number, pageSize: number }>(
  'users/fetchUsers',
  async ({ page, pageSize }) => {
    const service = new UserService();
    const users = await service.getAllUsers(page, pageSize);
    return users;
  }
);

// Action asynchrone pour récupérer un utilisateur par ID
export const fetchUserById = createAsyncThunk<User, string>(
  'users/fetchUserById',
  async (id) => {
    const service = new UserService();
    const user = await service.getUserById(id);
    return user;
  }
);

// Action asynchrone pour créer un utilisateur
export const createUser = createAsyncThunk<void, User>(
  'users/createUser',
  async (user) => {
    const service = new UserService();
    await service.createUser(user);
  }
);

// Action asynchrone pour mettre à jour un utilisateur
export const updateUser = createAsyncThunk<void, { id: string, user: User }>(
  'users/updateUser',
  async ({ id, user }) => {
    const service = new UserService();
    await service.updateUser(id, user);
  }
);

// Action asynchrone pour supprimer un utilisateur
export const deleteUser = createAsyncThunk<void, string>(
  'users/deleteUser',
  async (id) => {
    const service = new UserService();
    await service.deleteUser(id);
  }
);

// Création du slice avec Redux Toolkit
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue';
      })
      .addCase(fetchUserById.pending, (state) => {
         state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Optionnellement, vous pouvez mettre à jour un utilisateur spécifique dans l'état ici
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue';
      })
      .addCase(createUser.pending, (state) => {
         state.status = 'loading';
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.status = 'succeeded';
        // Après création, vous pourriez vouloir mettre à jour la liste des utilisateurs
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue';
      })
      .addCase(updateUser.pending, (state) => {
         state.status = 'loading';
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.status = 'succeeded';
        // Vous pouvez mettre à jour l'utilisateur dans l'état ici après la mise à jour
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue';
      })
      .addCase(deleteUser.pending, (state) => {
         state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Après suppression, vous pouvez supprimer l'utilisateur de la liste
        state.users = state.users.filter((user) => user.id !== action.meta.arg);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue';
      });
  },
});

export const selectUsers = (state: any) => state.users.users;
export const selectLoading = (state: any) => state.users.loading;
export const selectError = (state: any) => state.users.error;

export default userSlice.reducer;
