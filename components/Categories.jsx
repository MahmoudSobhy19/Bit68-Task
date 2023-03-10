import Image from "next/image";
import { useEffect, useState } from "react";
import { getCategories } from "../api/categories.api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SwiperNextButton, SwiperPrevButton } from "./SwiperButtons";
import "swiper/css";
import "swiper/swiper-bundle.css";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [next, setNext] = useState(
    "https://api-task.bit68.com/en/api/categories/" || null
  );
  const [load, setLoad] = useState(false);

  useEffect(() => {
    handelGetCategories();
  }, []);

  const handelGetCategories = () => {
    setLoad(true);
    getCategories(next)
      .then((res) => {
        setCategories([...res.results, ...categories]);
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
      <h1 className="text-secondary text-xl font-bold mt-6">Main Categories</h1>
      <Swiper
        spaceBetween={0}
        loop={true}
        modules={[Pagination]}
        className="w-full h-fit mx-[50px] my-4"
        slidesPerView={4}
        onReachEnd={() => {
          if (next) {
            handelGetCategories();
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
        {categories.length > 0 &&
          categories?.map((category) => {
            return (
              <SwiperSlide
                key={category.id}
                className="flex justify-center items-center"
              >
                <Image
                  src={category.image}
                  width={100}
                  height={100}
                  alt="slider"
                  className="mx-auto"
                />
                <p className="w-full text-center mt-2 font-bold">
                  {category.name}
                </p>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
