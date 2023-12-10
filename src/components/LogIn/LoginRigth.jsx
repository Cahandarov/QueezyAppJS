import Slider1 from "./Images/Slider1.png";
import Slider2 from "./Images/Slider2.png";
import Slider3 from "./Images/Slider3.png";
// import Circle from "./Images/Circle.svg";
// import round from "./Images/round.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";

export default function LoginRigth() {
  return (
    <div className="h-full w-full lg:w-[50%]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
      >
        <SwiperSlide>
          <div className="relative w-full lg:w-full  flex justify-center mx-auto">
            <img
              src={Slider1}
              alt="Slider1"
              className="w-full sm:w-[70%] h-[50%] sm:h-[93vh]"
            />
            {/* <div className="flex justify-center items-center gap-3 absolute bottom-36 ">
              <img src={Circle} alt="Slider1" />
              <img src={round} alt="Slider1" />
              <img src={round} alt="Slider1" />
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full lg:w-full flex justify-center mx-auto">
            <img
              src={Slider2}
              alt="Slider2"
              className="w-full sm:w-[70%] h-[50%] sm:h-[93vh] "
            />
            {/* <div className="flex justify-center items-center gap-3 absolute bottom-36 ">
              <img src={round} alt="round" />
              <img src={Circle} alt="circle" />
              <img src={round} alt="round" />
            </div> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full lg:w-full flex justify-center mx-auto">
            <img
              src={Slider3}
              alt="Slider3"
              className="w-full sm:w-[70%] h-[50%] sm:h-[93vh]"
            />
            {/* <div className="flex justify-center items-center gap-3 absolute bottom-36 ">
              <img src={round} alt="round" />
              <img src={round} alt="round" />
              <img src={Circle} alt="circle" />
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
