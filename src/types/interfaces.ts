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

// TODO cart

export interface CartProduct {
  count: number;
  _id: string;
  product: string;
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

// TODO: User Cart

export interface UserCartProduct {
  count: number;
  _id: string;
  product: IProduct;
  price: number;
}

export interface UserCart {
  _id: string;
  cartOwner: string;
  products: UserCartProduct[];
  totalCartPrice: number;
}

export interface UserCartResponse {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: UserCart;
}

// TODO: User WishList

export interface UserWishListResponse {
  status: string;
  count: number;
  data: IProduct[];
}
