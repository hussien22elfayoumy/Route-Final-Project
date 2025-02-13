import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';
import { fetchAllProducts } from '../../utils/products';

interface Category {
  name: string;
}

export interface IProduct {
  sold: number;
  images: string[];
  title: string;
  description: string;
  price: number;
  imageCover: string;
  category: Category;
  ratingsAverage: number;
  id: string;
}

export default function AllProducts() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchAllProducts,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const allProducts: IProduct[] = data?.data;

  return (
    <div className="grid content-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
