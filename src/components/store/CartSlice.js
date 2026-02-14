import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
