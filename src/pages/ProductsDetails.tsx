import ProductDetailsCard from '../features/products/ProductDetailsCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAllProducts, fetchProductDetails } from '../utils/public-api';
import Loader from '../components/Loader';
import { IProduct } from '../types/interfaces';
import RelatedProducts from '../components/RelatedProducts';
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

      <RelatedProducts
        relatedProducts={relatedProducts!}
        title="Products"
      />
    </>
  );
}
