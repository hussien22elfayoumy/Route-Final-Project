import { Link } from 'react-router-dom';
import { IBrand } from '../../utils/api';

export default function BrandCard({ brand }: { brand: IBrand }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-lg border border-border-light bg-card-bg shadow-sm">
      <div className="h-[300px]">
        <Link to={`/brand/${brand._id}/${brand.name}`}>
          <img
            className="h-[300px] w-full rounded-t-lg object-cover"
            src={brand.image}
          />
        </Link>
      </div>
      <div className="py-2 text-center text-lg font-semibold capitalize text-text-dark">
        {brand.name}
      </div>
    </div>
  );
}
