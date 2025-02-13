import Slider from 'react-slick';
import { Settings } from 'react-slick';
import Slider1 from '../assets/slider-image-1.jpeg';
import Slider2 from '../assets/slider-image-2.jpeg';
import Slider3 from '../assets/slider-image-3.jpeg';
import Slider4 from '../assets/slider-2.jpeg';

export default function HeroSlider() {
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
    <div className="flex">
      <div className="w-3/4">
        {/* @ts-expect-error Server Component */}
        <Slider {...settings}>
          <div aria-hidden="false">
            <img
              src={Slider1}
              className="h-[300px] w-full rounded-l-lg object-cover"
              alt="slider"
            />
          </div>
          <div aria-hidden="false">
            <img
              src={Slider2}
              className="h-[300px] w-full rounded-l-lg object-cover"
              alt="slider"
            />
          </div>
          <div aria-hidden="false">
            <img
              src={Slider3}
              className="h-[300px] w-full rounded-l-lg object-cover"
              alt="slider"
            />
          </div>
          <div aria-hidden="false">
            <img
              src={Slider4}
              className="h-[300px] w-full rounded-l-lg object-cover"
              alt="slider"
            />
          </div>
        </Slider>
      </div>
      <div className="flex w-1/4 flex-col">
        <img
          src={Slider2}
          className="h-[150px] w-full rounded-tr-lg object-cover"
          alt="slider"
        />
        <img
          src={Slider3}
          className="h-[150px] w-full rounded-br-lg object-cover"
          alt="slider"
        />
      </div>
    </div>
  );
}
