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

// TODO: get all products
export async function fetchAllProducts(): Promise<IProduct[]> {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
  const data = await res.json();

  if (!res.ok) throw new Error('Error Fetching all products data');

  return data.data;
}

//TODO: get specific Product

export async function fetchProductDetails(id: string | undefined): Promise<IProduct> {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`);
  const data = await res.json();

  if (!res.ok) throw new Error('Error getting Product Details');

  return data.data;
}

// TODO: get all categories

export async function fetchAllCategories(): Promise<ICategory[]> {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/categories`);
  const data = await res.json();

  if (!res.ok) throw new Error('Error Fetching all categories');

  return data.data;
}

//TODO: get specific category

export async function fetchCategoryDetails(id: string | undefined): Promise<ICategory> {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/categories/${id}`);
  const data = await res.json();

  if (!res.ok) throw new Error('Error getting Category Details');

  return data.data;
}

// TODO: get all brnads
export async function fetchAllBrands(): Promise<IBrand[]> {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/brands`);
  const data = await res.json();

  if (!res.ok) throw new Error('Error Fetching all Brands');

  return data.data;
}

//TODO: get specific brand
export async function fetchBrandDetails(id: string | undefined): Promise<IBrand> {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/brands/${id}`);
  const data = await res.json();

  if (!res.ok) throw new Error('Error getting Brand Details');

  return data.data;
}

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

// TODO: Cart

export async function addProductToCart(productId: string): Promise<AddToCartResponse> {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: userToken,
    },
    body: JSON.stringify({
      productId,
    }),
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to add product to cart.');
  }

  return data;
}

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

export async function fetchUserCart(): Promise<UserCartResponse> {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/cart`, {
    method: 'GET',
    headers: {
      token: userToken,
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to get user cart.');
  }

  return data;
}
