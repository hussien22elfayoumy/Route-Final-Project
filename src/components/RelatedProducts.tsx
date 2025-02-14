import { IProduct } from '../types/interfaces';
import ProductCard from '../features/products/ProductCard';

export default function RelatedProducts({
  relatedProducts,
  title,
}: {
  relatedProducts: IProduct[];
  title: string;
}) {
  return (
    <section className="mt-10 border-t border-border-dark py-10">
      <h2 className="mb-5 text-center text-xl font-semibold text-text-dark">
        Related Products for this {title}
      </h2>

      <div className="grid content-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {relatedProducts?.map((related) => (
          <ProductCard
            key={related.id}
            product={related}
          />
        ))}
      </div>
    </section>
  );
}
