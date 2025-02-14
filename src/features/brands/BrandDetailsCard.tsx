import { IBrand } from '../../types/interfaces';

export default function BrandDetailsCard({ brand }: { brand: IBrand | undefined }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-lg border border-border-light bg-card-bg shadow-sm">
      <div className="h-[300px]">
        <img
          className="h-[300px] w-full rounded-t-lg object-cover"
          src={brand?.image}
          alt={brand?.name}
        />
      </div>
      <div className="py-2 text-center text-lg font-semibold capitalize text-text-dark">
        {brand?.name}
      </div>
    </div>
  );
}
