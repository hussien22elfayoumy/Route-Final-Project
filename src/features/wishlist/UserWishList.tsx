import { Link } from 'react-router-dom';
import { useWishListContext } from '../../contexts/WishListContext';
import ProductCard from '../products/ProductCard';

export default function UserWishList() {
  const { error: wishLishError, userWishList } = useWishListContext();

  // if (isLoading) {
  //   return <Loader />;
  // }

  if (wishLishError) {
    return <p className="text-center text-lg font-bold text-red-600">{wishLishError}</p>;
  }

  return (
    <>
      {userWishList?.count! > 0 ? (
        <div className="grid content-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {userWishList?.data?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg font-bold">
          You don't have any wishlists{' '}
          <Link
            to="/products"
            className="text-color-base underline"
          >
            Browse Products now{' '}
          </Link>
        </p>
      )}
    </>
  );
}
