import { useEffect, useState } from "react";
import { Slide } from "../components";

// Componente para a seção de tendências (Trending)
const Trending = () => {
  // Estados para controlar o número de slides, o efeito e o espaço entre slides
  const [slides, setSlides] = useState(1);
  const [effect, setEffect] = useState(false);
  const [space, setSpace] = useState(50);

  // Efeito para atualizar o número de slides e o estilo em diferentes tamanhos de tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1024) {
        setSlides(3);
        setEffect(false);
        setSpace(50);
      } else if (width >= 768) {
        setSlides(2);
        setEffect(false);
        setSpace(50);
      } else if (width <= 768 && width >= 630) {
        setSlides(1);
        setEffect(true);
        setSpace(-150);
      } else if (width <= 640) {
        setSpace(-50);
      }
    };

    // Chamada inicial para definir o layout com base na largura da tela
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slides]);

  return (
    <section
      id="trending"
      className="flex flex-col gap-y-16 max-container scroll-my-40"
    >
      {/* Cabeçalho da seção de tendências */}
      <header className="flex flex-col w-full gap-y-4 items-center">
        <div className="flex w-full justify-center items-center gap-x-4">
          <span className="content-[''] w-10 h-[1px] bg-first-color"></span>
          <p className="text-first-color">Trending Food</p>
          <span className="content-[''] w-10 h-[1px] bg-first-color"></span>
        </div>

        {/* Título principal */}
        <h2 className="text-4xl min-[1024px]:text-6xl text-title-color font-bold">
          Popular Deliveries
        </h2>
      </header>

      {/* Componente de slide com base nos estados definidos */}
      <Slide slides={slides} effect={effect} space={space} />
    </section>
  );
};

export default Trending;
