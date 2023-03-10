import Image from "next/image";
import { useEffect, useState } from "react";
import { getBrands } from "../api/brands.api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwiperNextButton, SwiperPrevButton } from "./SwiperButtons";
import "swiper/css";
import "swiper/swiper-bundle.css";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [next, setNext] = useState(
    "https://api-task.bit68.com/en/api/brands/" || null
  );
  const [load, setLoad] = useState(false);

  useEffect(() => {
    handelGetBrands();
  }, []);

  const handelGetBrands = () => {
    setLoad(true);
    getBrands(next)
      .then((res) => {
        setBrands([...res.results, ...brands]);
        setNext(res.next);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setLoad(false);
      });
  };

  return (
    <div className="container mx-auto py-6 px-4 md:px-0">
      <h1 className="text-secondary text-xl font-bold mt-6">Popular Brands</h1>
      <Swiper
        spaceBetween={0}
        loop={true}
        modules={[Pagination]}
        className="w-full h-fit mx-[50px] my-4"
        slidesPerView={4}
        onReachEnd={() => {
          if (next) {
            handelGetBrands();
          }
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <div className="flex ">
          <span className="absolute top-[40%] translate-y-[-50%] z-10 left-[-10px]">
            <SwiperPrevButton />
          </span>
          <span className="absolute top-[40%] translate-y-[-50%] z-10 right-[-10px]">
            <SwiperNextButton />
          </span>
        </div>
        {brands.length > 0 &&
          brands?.map((brand) => {
            return (
              <SwiperSlide
                key={brand.id}
                className="flex justify-center items-center"
              >
                <div className="w-[50%] mx-auto rounded-full overflow-hidden">
                  <Image
                    src={brand.image}
                    width={80}
                    height={80}
                    alt="slider"
                    className="w-full mx-auto bg-secondary p-6"
                  />
                </div>
                <p className="w-full text-center mt-2 font-bold">
                  Up to {brand.sale_percentage}%
                </p>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
