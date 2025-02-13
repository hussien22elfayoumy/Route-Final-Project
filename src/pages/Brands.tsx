import AllBrands from '../features/brands/AllBrands';

export default function Brands() {
  return (
    <section className="py-10">
      <h2 className="mb-10 text-center text-3xl font-semibold capitalize text-color-base">
        Browse All Brands
      </h2>
      <AllBrands />
    </section>
  );
}
