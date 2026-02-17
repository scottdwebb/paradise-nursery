// 🗃️ src/store/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item.name === plant.name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const plantName = action.payload;
      state.items = state.items.filter((item) => item.name !== plantName);
    },
    incrementQuantity: (state, action) => {
      const plantName = action.payload;
      const item = state.items.find((item) => item.name === plantName);
      if (item) {
        item.quantity += 1;
      }
    },
    // in cartSlice.js
    decrementQuantity: (state, action) => {
      const plantName = action.payload;
      const item = state.items.find((i) => i.name === plantName);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((i) => i.name !== plantName);
      }
    },
    removeItem: (state, action) => {
      const plantName = action.payload;
      state.items = state.items.filter((i) => i.name !== plantName);
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalCost = (state) =>
  state.cart.items.reduce((total, item) => total + item.cost * item.quantity, 0);

export default cartSlice.reducer;
