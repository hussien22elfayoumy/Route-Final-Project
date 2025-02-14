import { Link } from 'react-router-dom';
import { IBrand } from '../../types/interfaces';

export default function BrandCard({ brand }: { brand: IBrand }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-lg border border-border-light bg-card-bg shadow-sm">
      <Link to={`/brands/${brand._id}/${brand.name}`}>
        <div className="h-[300px]">
          <img
            className="h-[300px] w-full rounded-t-lg object-cover"
            src={brand.image}
          />
        </div>
      </Link>
      <div className="py-2 text-center text-lg font-semibold capitalize text-text-dark">
        {brand.name}
      </div>
    </div>
  );
}
