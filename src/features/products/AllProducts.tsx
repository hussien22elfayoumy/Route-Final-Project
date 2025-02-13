import ProductCard from './ProductCard';

import { useProducts } from '../../hooks/useProducts';
import Loader from '../../components/Loader';

export default function AllProducts() {
  const { data, error, isLoading, isError } = useProducts();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="grid content-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
