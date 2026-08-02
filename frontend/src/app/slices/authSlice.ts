import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "@/app/store/withTypes.ts";
import {AuthServices, type LoginRequest} from "@/layout/services/auth.ts";

interface AuthState {
    username: string | null
    isAuthenticated: boolean
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: AuthState = {
    username: null,
    isAuthenticated: false,
    status: 'idle',
    error: null,
}

export const loginThunk = createAppAsyncThunk(
    'auth/login',
    async (req: LoginRequest) => {
        return await AuthServices.login(req)
    }
)

export const checkAuthThunk = createAppAsyncThunk(
    'auth/checkAuth',
    async () => {
        return await AuthServices.me()
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.username = null
            state.isAuthenticated = false
            state.status = 'idle'
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.isAuthenticated = true
                state.username = action.payload.username
                state.error = null
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.isAuthenticated = false
                state.error = action.error.message || 'Login failed'
            })
            .addCase(checkAuthThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(checkAuthThunk.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.isAuthenticated = action.payload.authenticated
                state.username = action.payload.username
                state.error = null
            })
            .addCase(checkAuthThunk.rejected, (state) => {
                state.status = 'failed'
                state.isAuthenticated = false
                state.username = null
                state.error = null
            })
    },
})

export const {logout} = authSlice.actions
export default authSlice.reducer
