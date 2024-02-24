import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { API } from '../../api';

interface AuthState {
    userData: any | null;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
}

const initialState: AuthState = {
    userData: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
};

export const login = createAsyncThunk('login', async (params: any, { rejectWithValue }) => {
    try {
        const response = await API.post('/login', params);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logout: (state) => {
            state.userData = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(login.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.userData = action.payload;
        });
        builder.addCase(login.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;
