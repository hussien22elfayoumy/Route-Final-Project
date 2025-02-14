import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import CategoryDetailsCard from '../features/categories/CategoryDetailsCard';
import { fetchAllProducts, fetchCategoryDetails } from '../utils/public-api';
import { ICategory, IProduct } from '../types/interfaces';
import RelatedProducts from '../components/RelatedProducts';
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

      <RelatedProducts
        relatedProducts={relatedProducts!}
        title="Category"
      />
    </>
  );
}
