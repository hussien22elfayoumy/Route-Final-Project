import AllBrands from '../features/brands/AllBrands';

export default function Brands() {
  return (
    <section className="pb-10 pt-5">
      <header className="mb-5 flex h-[350px] flex-col items-center justify-center gap-5 rounded-lg bg-brands-pattern bg-cover bg-center px-5 tracking-wide">
        <h2 className="text-center text-5xl font-bold text-slate-50">
          Shop by <span className="text-color-light">Brand</span>
        </h2>
        <p className="text-lg font-semibold tracking-wider text-slate-50">
          Discover top brands and their best products, all in one place
        </p>
      </header>
      <AllBrands />
    </section>
  );
}
