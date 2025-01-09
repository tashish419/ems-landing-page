import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser : (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const { addUser , clearUser } = authSlice.actions;

export default authSlice.reducer;