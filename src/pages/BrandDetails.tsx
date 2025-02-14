import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loader from '../components/Loader';
import BrandDetailsCard from '../features/brands/BrandDetailsCard';
import { fetchAllProducts, fetchBrandDetails } from '../utils/public-api';
import { IBrand, IProduct } from '../types/interfaces';
import RelatedProducts from '../components/RelatedProducts';
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

      <RelatedProducts
        relatedProducts={relatedProducts!}
        title="Brands"
      />
    </>
  );
}
