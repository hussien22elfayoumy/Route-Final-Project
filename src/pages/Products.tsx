import AllProducts from '../features/products/AllProducts';

export default function Products() {
  return (
    <section className="pb-10 pt-5">
      <header className="bg-products-pattern mb-5 flex h-[350px] flex-col items-center justify-center gap-5 rounded-lg bg-cover bg-center px-5 tracking-wide">
        <h2 className="text-center text-5xl font-bold text-slate-50">
          Explore Our <span className="text-color-light">Products</span>
        </h2>
        <p className="text-lg font-semibold tracking-wider text-slate-50">
          Unbeatable prices on premium products—grab yours today!
        </p>
      </header>

      <AllProducts />
    </section>
  );
}
