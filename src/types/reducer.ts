import { CartItem, ShippingInfo, User } from "./types";

export interface UserReducerInitialState {
  user: User | null;
  loading: boolean;
}
export interface CartReducerInitialState {
  cartItems: CartItem[];
  loading: boolean;
  subtotal: number;
  total: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  shippingInfo: ShippingInfo;
}
