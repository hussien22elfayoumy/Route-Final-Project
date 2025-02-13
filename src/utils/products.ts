export async function fetchAllProducts() {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);
  const data = await res.json();

  if (!res.ok) throw new Error('Error Fetching all products data');

  return data;
}
