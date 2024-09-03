import {
  Bar,
  CartItem,
  Line,
  Order,
  Pie,
  Product,
  ShippingInfo,
  Stats,
  User,
} from "./types";

export type CustomError = {
  status: number;
  data: { success: boolean; message: string };
};

export type MessageResponse = {
  success: boolean;
  message: string;
};

export type AllUserResponse = {
  success: boolean;
  users: User[];
};

export type UserResponse = {
  success: boolean;
  user: User;
};

export type ProductResponse = {
  success: boolean;
  products: Product[];
};

export type CategoryResponse = {
  success: boolean;
  categories: string[];
};

export type SearchProductResponse = {
  success: boolean;
  products: Product[];
  totalPage: number;
};

export type ProductDetailResponse = {
  success: boolean;
  product: Product;
};

export type AllOrdersResponse = {
  success: boolean;
  orders: Order[];
};

export type OrderDetailResponse = {
  success: boolean;
  order: Order;
};

export type StatsResponse = {
  success: boolean;
  stats: Stats;
};

export type PieResponse = {
  success: boolean;
  charts: Pie;
};

export type BarResponse = {
  success: boolean;
  charts: Bar;
};

export type LineResponse = {
  success: boolean;
  charts: Line;
};

export type SearchProductRequest = {
  price: number;
  page: number;
  category: string;
  search: string;
  sort: string;
};

export type NewProductRequest = {
  id: string;
  formData: FormData;
};

export type UpdateProductRequest = {
  userId: string;
  productId: string;
  formData: FormData;
};

export type DeleteProductRequest = {
  userId: string;
  productId: string;
};

export type NewOrderRequest = {
  orderItems: CartItem[];
  subtotal: number;
  total: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  shippingInfo: ShippingInfo;
  user: string;
};

export type UpdateOrderRequest = {
  orderId: string;
  userId: string;
};

export type DeleteUserRequest = {
  userId: string;
  adminUserId: string;
};
