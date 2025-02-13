import HeroSlider from '../components/HeroSlider';
import ProductCard from '../features/products/ProductCard';

export default function Home() {
  return (
    <>
      <section className="mb-10 rounded-lg pt-2">
        <HeroSlider />
      </section>
      <section>Slider 2</section>
      <section className="grid content-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
}
