import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import starIcon from "../assets/star-icon.svg";

import { TrendingItems } from "../constants";

import { useEffect, useState } from "react";

// Componente para exibição de slides
const Slide = () => {
  // Estado para controlar o número de slides visíveis com base no tamanho da tela
  const [slides, setSlides] = useState(1);

  // Efeito para atualizar o número de slides visíveis com base no redimensionamento da tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlides(3);
      } else if (width >= 600) {
        setSlides(2);
      } else {
        setSlides(1);
      }
    };

    // Chama a função handleResize para definir o número de slides iniciais com base no tamanho da tela
    handleResize();
    // Adiciona um ouvinte de evento de redimensionamento da tela para atualizar os slides conforme necessário
    window.addEventListener("resize", handleResize);

    // Remove o ouvinte de evento de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex w-full justify-center">
      {/* Inicialização do componente Swiper */}
      <Swiper
        slidesPerView={slides}
        spaceBetween={-40}
        className="flex w-full justify-center"
      >
        {/* Mapeamento dos itens do Trending */}
        {TrendingItems.map((item) => (
          // Slide individual
          <SwiperSlide key={item.id} className="relative">
            <div className="w-3/4 max-w-[420px]">
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
