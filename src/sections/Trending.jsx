// import { useEffect, useState } from "react";
import { Slide } from "../components";

// Componente para a seção de tendências (Trending)
const Trending = () => {
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
      <Slide />
    </section>
  );
};

export default Trending;
