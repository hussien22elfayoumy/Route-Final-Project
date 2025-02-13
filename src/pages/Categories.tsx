import AllCategories from '../features/categories/AllCategories';

export default function Categories() {
  return (
    <section className="py-10">
      <h2 className="mb-10 text-center text-3xl font-semibold capitalize text-color-base">
        Browse All Categories
      </h2>
      <AllCategories />
    </section>
  );
}
