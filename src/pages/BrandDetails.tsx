import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProductCard from '../features/products/ProductCard';
import Loader from '../components/Loader';
import BrandDetailsCard from '../features/brands/BrandDetailsCard';
import { fetchAllProducts, fetchBrandDetails, IBrand, IProduct } from '../utils/api';
export default function BrandDetails() {
  const { brandsId, brand } = useParams();
  const [brandDetials, setBrandDetails] = useState<IBrand>();
  const [relatedProducts, setRelatedProducts] = useState<IProduct[] | undefined>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getBrandsDetails() {
    try {
      setIsLoading(true);
      const fetchData = await fetchBrandDetails(brandsId);

      setBrandDetails(fetchData);
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

      setRelatedProducts(fetchData.filter((product) => product.brand.name === brand));
    } catch (err) {
      console.log(err);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    getBrandsDetails();
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
        <BrandDetailsCard brand={brandDetials} />
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
