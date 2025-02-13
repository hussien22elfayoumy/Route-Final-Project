import HeroSlider from '../components/HeroSlider';
import AllProducts from '../features/products/AllProducts';
import ProductCard from '../features/products/ProductCard';

export default function Home() {
  return (
    <>
      <section className="mb-10 rounded-lg pt-2">
        <HeroSlider />
      </section>
      <section className="py-5">Slider 2</section>
      <section className="py-5">
        <AllProducts />
      </section>
    </>
  );
}
