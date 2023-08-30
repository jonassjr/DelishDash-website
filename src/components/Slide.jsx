import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, EffectCoverflow } from "swiper/modules";

import starIcon from "../assets/star-icon.svg";
import { TrendingItems } from "../constants";

// Componente para exibição de slides
const Slide = ({ slides, effect, space }) => {
  return (
    <div className="flex w-full justify-center">
      {/* Inicialização do componente Swiper */}
      <Swiper
        effect={effect ? "coverflow" : ""}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 0,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
        slidesPerView={slides}
        spaceBetween={space}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        className="flex w-full justify-center"
      >
        {/* Mapeamento dos itens do Trending */}
        {TrendingItems.map((item) => (
          // Slide individual
          <SwiperSlide key={item.id} className="relative">
            <div className="w-3/4 max-w-[420px] min-[768px]:w-full min-[768px]:max-w-[420px]">
              <img src={item.img} alt="" className="w-full h-auto" />
            </div>

            {/* Conteúdo sobreposto */}
            <div className="absolute bottom-4 left-4 text-body-color">
              <p className="text-xl min-[1024px]:text-2xl font-bold">
                {item.label}
              </p>
              <div className="flex gap-x-2 text-base ">
                {item.note}

                {/* Exibição de estrelas com base na nota */}
                <div className="flex gap-x-1">
                  {Array(Math.round(item.note))
                    .fill()
                    .map((_, i) => (
                      <img key={i} src={starIcon} alt={`star ${i + 1}`} />
                    ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
