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
    console.log('params: ', params);
    try {
        const response = await API.post('/login', params);
        console.log('response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        return rejectWithValue(error);
    }
});

const AuthSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
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

export default AuthSlice.reducer;
