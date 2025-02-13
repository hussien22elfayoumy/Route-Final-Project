import { useBrands } from '../../hooks/useBrands';
import BrandCard from './BrandCard';
import Loader from '../../components/Loader';

export default function AllBrands() {
  const { data, error, isLoading, isError } = useBrands();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="grid content-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((brand) => (
        <BrandCard
          key={brand.name}
          brand={brand}
        />
      ))}
    </div>
  );
}
