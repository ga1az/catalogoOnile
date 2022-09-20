import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  cartItems: [],
  cartTotalCuantities: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initalState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const itemIndex = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].count += action.payload.count;
        state.cartItems[itemIndex].message = action.payload.message;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      state.cartTotalCuantities = state.cartItems.length;
      state.cartTotalAmount = state.cartItems.reduce(
        (total: any, item: any) => total + item.price * item.count,
        0
      );
    },
    removeFromCart: (state: any, action: any) => {
      const index = state.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    viewCart: (state: any, action: any) => {
      return state;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart } = cartSlice.actions;
