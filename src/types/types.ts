export type User = {
  name: string;
  gender: string;
  photo: string;
  email: string;
  role: string;
  _id: string;
  dob: string;
};
export type Product = {
  name: string;
  price: number;
  stock: number;
  category: string;
  photo: string;
  _id: string;
};
export type ShippingInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
};
export type CartItem = {
  productId: string;
  price: number;
  quantity: number;
  name: string;
  photo: string;
  stock: number;
};
export type OrderItem = Omit<CartItem, "stock"> & { _id: string };
export type Order = {
  status: string;
  orderItems: OrderItem[];
  shippingInfo: ShippingInfo;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  _id: string;
  user: {
    name: string;
    _id: string;
  };
};

type CountAndChange = {
  order: number;
  product: number;
  user: number;
  revenue: number;
};
type LatestTransaction = {
  _id: string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
};

export type Stats = {
  categoryCount: Record<string, number>[];
  userRatio: { male: number; femaleUserCount: number };
  latestTransactions: LatestTransaction[];
  changePercent: CountAndChange;
  count: CountAndChange;
  chart: {
    order: number[];
    revenue: number[];
  };
};
export type Pie = {
  orderFullfillment: {
    processing: number;
    shipped: number;
    delivered: number;
  };
  productCategories: Record<string, number>[];
  stockAvailability: {
    inStock: number;
    outOfStock: number;
  };
  revenueDist: {
    map(arg0: (i: any) => string): string;
    netMargin: number;
    discount: number;
    productionCost: number;
    burn: number;
    marketingCost: number;
  };
  adminCustomer: {
    admin: number;
    customer: number;
  };
  userAgeGroup: {
    teen: number;
    adult: number;
    old: number;
  };
};
export type Bar = {
  products: number[];
  users: number[];
  orders: number[];
};
export type Line = {
  products: number[];
  users: number[];
  discount: number[];
  revenue: number[];
};
