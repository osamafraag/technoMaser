import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartedProducts: [],
};

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
        var found = false
        state.cartedProducts?.map((product,index) => {
        if(action.payload.id === product.id){
          var count = product.count
          count = count + 1
          delete product.count
          product.count = count
          found = true
        }
      })
      if (found !== true){
        action.payload.count = 1
        state.cartedProducts.push(action.payload)
      }
    },
    decreaseCart: (state, action) => {
      state.cartedProducts?.map((product,index) => {
        if(action.payload.id === product.id){
          var count = product.count
          count = count - 1
          delete product.count
          product.count = count
        }
      })
    },
    deleteProduct: (state, action) => {
      state.cartedProducts?.map((product,index) => {
        if(action.payload.id === product.id){
          state.cartedProducts.splice(index, 1)
        }
      })
    },
    truncateCart: (state) => {
      state.cartedProducts = []
    },
    
  },
});

export const {
    decreaseCart,
    deleteProduct,
    addProduct,
    truncateCart,
} = cart.actions;

export default cart.reducer;