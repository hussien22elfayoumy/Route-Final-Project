import ProductDetailsCard from '../features/products/ProductDetailsCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAllProducts, fetchProductDetails } from '../utils/public-api';
import ProductCard from '../features/products/ProductCard';
import Loader from '../components/Loader';
import { IProduct } from '../types/interfaces';
export default function ProductsDetails() {
  const { productId, category } = useParams();
  const [productDetails, setProductDetails] = useState<IProduct>();
  const [relatedProducts, setRelatedProducts] = useState<IProduct[] | undefined>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getProductDetails() {
    try {
      setIsLoading(true);
      const fetchData = await fetchProductDetails(productId);

      setProductDetails(fetchData);
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

    getProductDetails();
    getRelatedProducts();
  }, [productId, category]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <section className="py-20">
        <ProductDetailsCard productDetails={productDetails} />
      </section>

      <section className="mt-10 border-t border-border-dark py-10">
        <h2 className="mb-5 text-center text-xl font-semibold text-text-dark">Related Products</h2>
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
