import { createSlice, configureStore } from "@reduxjs/toolkit";

const authToken = localStorage.getItem('authToken') === 'true' ? true : false;

const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuth: authToken },
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
            localStorage.setItem('authToken', false);
            localStorage.removeItem('loggedName');
            localStorage.removeItem('loggedEmail');
        }
    }
})

const store = configureStore({
    reducer: { auth: authSlice.reducer }
});

export const authActions = authSlice.actions;
export default store;