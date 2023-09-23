import { createSlice } from "@reduxjs/toolkit";

const authToken = localStorage.getItem('authToken') === 'true' ? true : false;
console.log(authToken)
export const authSlice = createSlice({
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