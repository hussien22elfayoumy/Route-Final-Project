import { Link } from 'react-router-dom';
import { ICategory } from '../../types/interfaces';

export default function CategoryCard({ category }: { category: ICategory }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-lg border border-border-light bg-card-bg shadow-sm">
      <div className="h-[300px]">
        <Link to={`/categories/${category._id}/${category.name}`}>
          <img
            className="h-[300px] w-full rounded-t-lg object-cover"
            src={category.image}
          />
        </Link>
      </div>
      <div className="py-2 text-center text-lg font-semibold capitalize text-text-dark">
        {category.name}
      </div>
    </div>
  );
}
