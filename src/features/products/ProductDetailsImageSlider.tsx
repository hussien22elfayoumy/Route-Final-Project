import Slider from 'react-slick';
import { Settings } from 'react-slick';
import Test from '../../assets/slider-2.jpeg';

export default function ProductDetailsImageSlider({ imgs }: { imgs: string[] | undefined }) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="w-full">
      {/* @ts-expect-error Server Component */}
      <Slider {...settings}>
        {imgs?.map((img) => (
          <div
            key={img}
            aria-hidden="false"
            className="overflow-hidden text-center font-semibold"
          >
            <img
              src={img}
              className="h-[380px] w-full scale-110 object-cover object-center"
              alt="alt"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
