import Slider from 'react-slick';
import { Settings } from 'react-slick';

import { fetchAllCategories } from '../utils/categories';
import { useQuery } from '@tanstack/react-query';

interface ICategoires {
  image: string;
  name: string;
}

export default function CategoriesSlider() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchAllCategories,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const allCatigories: ICategoires[] = data?.data;

  console.log(allCatigories);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      {/* @ts-expect-error Server Component */}
      <Slider {...settings}>
        {allCatigories.map((cat) => (
          <div
            key={cat.name}
            aria-hidden="false"
            className="text-center font-semibold text-color-base"
          >
            <img
              src={cat.image}
              className="h-[300px] w-full object-cover"
              alt={cat.name}
            />
            <h2 className="mt-1">{cat.name}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
}
