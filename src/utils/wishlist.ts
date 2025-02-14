import { IProduct } from './api';

export interface UserWishListResponse {
  status: string;
  count: number;
  data: IProduct[];
}

export async function fetchUserWishList(): Promise<UserWishListResponse> {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/wishlist`, {
    method: 'GET',
    headers: {
      token: userToken,
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to get user WishList.');
  }

  return data;
}

export async function addProductToWishList(productId: string) {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/wishlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      token: userToken,
    },
    body: JSON.stringify({ productId }),
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to update your cart item.');
  }

  return data;
}

export async function removeProductFormWishList(productId: string) {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/wishlist/${productId}`, {
    method: 'DELETE',
    headers: {
      token: userToken,
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to delete product from wishlist.');
  }

  return data;
}
