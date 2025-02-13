export interface ICategory {
  name: string;
  image: string;
  slug: string;
  _id: string;
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
