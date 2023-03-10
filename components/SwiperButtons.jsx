import { useSwiper } from "swiper/react";

export const SwiperNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => {
        swiper.slideNext();
      }}
      className="w-fit h-10 rotate-180"
    >
      <img src="/arrow.svg" alt="arrow" className="h-10 invert" />
    </button>
  );
};

export const SwiperPrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => {
        swiper.slidePrev();
      }}
      className="w-fit h-10"
    >
      <img src="/arrow.svg" alt="arrow" className="h-10 invert" />
    </button>
  );
};
