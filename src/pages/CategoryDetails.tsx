import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAllProducts, fetchCategoryDetails, ICategory, IProduct } from '../utils/api';
import ProductCard from '../features/products/ProductCard';
import Loader from '../components/Loader';
import CategoryDetailsCard from '../features/categories/CategoryDetailsCard';
export default function CategoryDetails() {
  const { categoryId, category } = useParams();
  const [categoryDetails, setCategoryDetails] = useState<ICategory>();
  const [relatedProducts, setRelatedProducts] = useState<IProduct[] | undefined>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getCategoryDetails() {
    try {
      setIsLoading(true);
      const fetchData = await fetchCategoryDetails(categoryId);

      setCategoryDetails(fetchData);
    } catch (err) {
      console.log(err);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getRelatedProducts() {
    try {
      setIsLoading(true);
      const fetchData = await fetchAllProducts();

      setRelatedProducts(fetchData.filter((product) => product.category.name === category));
    } catch (err) {
      console.log(err);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    getCategoryDetails();
    getRelatedProducts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <section className="py-20">
        <CategoryDetailsCard categoryDetails={categoryDetails} />
      </section>

      <section className="mt-10 border-t border-border-dark py-10">
        <h2 className="mb-5 text-center text-xl font-semibold text-text-dark">
          Related Products for this Category
        </h2>

        <div className="grid content-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {relatedProducts?.map((related) => (
            <ProductCard
              key={related.id}
              product={related}
            />
          ))}
        </div>
      </section>
    </>
  );
}
