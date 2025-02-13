import CategoriesSlider from '../components/CatigoriesSlider';
import HeroSlider from '../components/HeroSlider';
import AllProducts from '../features/products/AllProducts';

export default function Home() {
  return (
    <>
      <section className="mb-10 rounded-lg pt-2">
        <HeroSlider />
      </section>
      <section className="py-5">
        <h2 className="mb-5 text-center text-xl font-semibold text-text-dark">
          Shop Popular Categories
        </h2>
        <CategoriesSlider />
      </section>
      <section className="py-10">
        <h2 className="mb-5 text-center text-2xl font-semibold text-text-dark">Recent Products</h2>
        <AllProducts />
      </section>
    </>
  );
}
