import { ICategory } from '../../utils/api';

export default function CategoryDetailsCard({
  categoryDetails,
}: {
  categoryDetails: ICategory | undefined;
}) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-lg border border-border-light bg-card-bg shadow-sm">
      <div className="h-[300px]">
        <img
          className="h-[300px] w-full rounded-t-lg object-cover"
          src={categoryDetails?.image}
          alt={categoryDetails?.name}
        />
      </div>
      <div className="py-2 text-center text-lg font-semibold capitalize text-text-dark">
        {categoryDetails?.name}
      </div>
    </div>
  );
}
