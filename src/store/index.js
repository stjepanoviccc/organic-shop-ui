import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuth: false },
    reducers: {
        login (state) {
            state.isAuth = true;
        },
        logout (state) {
            state.isAuth = false;
        }
    }
})

const store = configureStore({
    reducer: { auth: authSlice.reducer }
});

export const authActions = authSlice.actions;
export default store;