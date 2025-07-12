import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";

const loadState = () => {
  try {
    const serialized = localStorage.getItem("cart");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

const saveState = (state: any) => {
  try {
    const serialized = JSON.stringify(state.cart);
    localStorage.setItem("cart", serialized);
  } catch (e) {
    console.error("Could not save cart:", e);
  }
};

const preloadedCart = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: preloadedCart ?? { items: [] },
  },
});

store.subscribe(() => saveState(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
