import { AddToCartResponse, UserCartResponse } from '../types/interfaces';

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

export async function deleteUserCart() {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/cart`, {
    method: 'DELETE',
    headers: {
      token: userToken,
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to delete your cart.');
  }

  return data;
}

export async function deleteCartItem(productId: string) {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/cart/${productId}`, {
    method: 'DELETE',
    headers: {
      token: userToken,
    },
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Failed to delete your cart item.');
  }

  return data;
}

export async function updateCartItemQty(productId: string, count: number) {
  const userToken = JSON.parse(localStorage.getItem('loggedInUser')!)?.token;

  if (!userToken) {
    throw new Error('You need to Login first.');
  }

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/cart/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      token: userToken,
    },
    body: JSON.stringify({ count }),
  });
  const data = await res.json();
  console.log('res', res);
  console.log('data', data);

  if (!res.ok) {
    throw new Error(data.message || 'Failed to update your cart item.');
  }

  return data;
}
