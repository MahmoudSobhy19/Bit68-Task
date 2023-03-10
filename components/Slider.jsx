import { useEffect, useState } from "react";
import { getSliders } from "../api/slider.api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwiperNextButton, SwiperPrevButton } from "./SwiperButtons";
import "swiper/css";
import "swiper/swiper-bundle.css";

export default function Slider() {
  const [sliders, setSliders] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    getSliders()
      .then((res) => {
        setSliders(res.results);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        paginationType="bullets"
        modules={[Pagination]}
        className="w-full h-[200px] md:h-[300px] lg:h-[470px]"
      >
        <div className="flex ">
          <span className="absolute top-[50%] translate-y-[-50%] z-10 left-6">
            <SwiperPrevButton />
          </span>
          <span className="absolute top-[50%] translate-y-[-50%] z-10 right-6">
            <SwiperNextButton />
          </span>
        </div>
        {sliders.length > 0 &&
          sliders?.map((slider) => {
            return (
              <SwiperSlide key={slider.id}>
                <img
                  src={slider.image}
                  alt="slider"
                  className="w-full h-full"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
