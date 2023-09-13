import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem) {
                state.items.push({id: newItem.id, image: newItem.image, title: newItem.title, price: newItem.price, quantity: newItem.quantity, totalPrice: newItem.price * parseInt(newItem.quantity)});
            } else {
                existingItem.quantity = parseInt(existingItem.quantity) + parseInt(newItem.quantity);
                existingItem.totalPrice += existingItem.price * parseInt(newItem.quantity);
            }
            state.totalQuantity = state.items.length;
            state.totalAmount += parseInt(newItem.quantity) * newItem.price;
        },

        removeFromCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== newItem.id);
            } else {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= newItem.price;
            }
            state.totalQuantity -= 1;
            state.totalAmount -= newItem.price;
        }
    }
});