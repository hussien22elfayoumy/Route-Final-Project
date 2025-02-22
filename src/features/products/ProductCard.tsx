import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useCartCtx } from '../../contexts/CartContext';
import { useWishListContext } from '../../contexts/WishListContext';
import { IProduct } from '../../types/interfaces';
import { formatCurrency } from '../../utils/formatCurrency';

export default function ProductCard({ product }: { product: IProduct }) {
  const { handleAddToCart } = useCartCtx();
  const { handleAddProductToWishList, handleDeleteProductFromWishList, userWishList } =
    useWishListContext();

  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const inWishList = userWishList?.data.some((item) => item.id === product.id);

  const handleClick = async () => {
    setIsAddingToCart(true);
    try {
      await handleAddToCart(product.id);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-sm rounded-lg border border-border-light bg-card-bg shadow-sm">
      <div className="relative h-[350px]">
        <Link to={`/products/${product.id}/${product.category.name}`}>
          <img
            className="h-[350px] w-full rounded-t-lg object-cover"
            src={product.imageCover}
            alt={product.title}
          />
        </Link>
        {inWishList ? (
          <button
            onClick={() => handleDeleteProductFromWishList(product.id)}
            className="star absolute right-4 top-4"
          >
            <FaHeart className="size-7 text-yellow-300" />
          </button>
        ) : (
          <button
            onClick={() => handleAddProductToWishList(product.id)}
            className="star absolute right-4 top-4"
          >
            <FaRegHeart className="size-7" />
          </button>
        )}
      </div>
      <div className="mt-3 flex h-[calc(100%-360px)] flex-col gap-3 px-5 pb-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold tracking-tight text-color-base">
            {product.category.name}
          </p>

          <div className="flex items-center">
            <div className="l flex items-center justify-between space-x-1 rtl:space-x-reverse">
              <svg
                className="size-5 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="ms-2 rounded-sm bg-color-base/20 px-2 py-0.5 text-xs font-semibold">
              {product.ratingsAverage}
            </span>
          </div>
        </div>

        <h5 className="mb-5 font-semibold tracking-tight text-text-dark">
          <Link
            to={`/products/${product.id}/${product.category.name}`}
            className=""
          >
            {product.title.slice(0, 25)} ...
          </Link>
        </h5>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-semibold">{formatCurrency(product.price)}</span>
          <button
            disabled={isAddingToCart}
            onClick={handleClick}
            className="rounded-lg bg-color-base px-4 py-2 text-center text-sm font-medium text-white hover:bg-color-dark focus:outline-none focus:ring-4 focus:ring-color-base disabled:cursor-not-allowed disabled:opacity-30"
          >
            {isAddingToCart ? 'Adding .. ..' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
