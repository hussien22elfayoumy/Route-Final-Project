import Loader from '../../components/Loader';
import { useCategories } from '../../hooks/useCategories';
import CategoryCard from './CategoryCard';

export default function AllCategories() {
  const { data, error, isLoading, isError } = useCategories();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="grid content-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
        />
      ))}
    </div>
  );
}
