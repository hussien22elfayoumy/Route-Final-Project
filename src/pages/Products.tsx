import AllProducts from '../features/products/AllProducts';

export default function Products() {
  return (
    <section className="py-10">
      <h2 className="mb-10 text-center text-3xl font-semibold capitalize text-color-base">
        Browse All Products
      </h2>
      <AllProducts />
    </section>
  );
}
