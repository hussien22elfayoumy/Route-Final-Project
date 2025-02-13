export async function fetchAllCategories() {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/categories`);
  const data = await res.json();

  if (!res.ok) throw new Error('Error Fetching all categories');

  return data;
}
