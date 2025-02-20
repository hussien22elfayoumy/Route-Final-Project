// NOTE: Shared Interfaces
export interface ICategory {
  name: string;
  image: string;
  slug: string;
  _id: string;
}

export interface IBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface IProduct {
  sold: number;
  images: string[];
  title: string;
  description: string;
  price: number;
  imageCover: string;
  category: ICategory;
  ratingsAverage: number;
  id: string;
  brand: IBrand;
}

interface IShippingAddress {
  details: string;
  phone: string;
  city: string;
}

interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

// NOTE: Cart Interfaces
export interface CartProduct {
  count: number;
  _id: string;
  product: IProduct;
  price: number;
}

export interface CartData {
  _id: string;
  cartOwner: string;
  products: CartProduct[];
  totalCartPrice: number;
}

export interface AddToCartResponse {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: CartData;
}

// NOTE: User Cart Interfaces
export interface UserCart {
  _id: string;
  cartOwner: string;
  products: CartProduct[];
  totalCartPrice: number;
}

export interface UserCartResponse {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: UserCart;
}

// NOTE: User Wishlist Interfaces
export interface UserWishListResponse {
  status: string;
  count: number;
  data: IProduct[];
}

// NOTE: User Orders Interfaces

export interface OrderResponse {
  shippingAddress: IShippingAddress;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  user: IUser;
  cartItems: CartProduct[];
  createdAt: string;
  updatedAt: string;
  id: number;
}
