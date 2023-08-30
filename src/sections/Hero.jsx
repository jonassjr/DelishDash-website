import { Button } from "../components";

import heroImage from "../assets/hero-image.png";

// Componente para (hero section)
const Hero = () => {
  return (
    <section
      id="home"
      className="grid justify-center pt-16 items-center gap-y-10 min-[1024px]:grid-cols-2 w-full 
       max-container scroll-my-28"
    >
      {/* Coluna de conteúdo */}
      <div className="flex flex-col gap-y-5 min-[1024px]:gap-y-6 items-center max-w-[560px] min-[1024px]:items-start">
        {/* Tag de destaque "Healthy Food" */}
        <p className="text-first-color bg-[#FAFAFA] w-fit px-6 py-2 rounded-2xl">
          Healthy Food
        </p>

        {/* Título principal */}
        <h1 className="text-5xl text-center min-[1024px]:text-start min-[1024px]:text-7xl font-bold text-title-color">
          Rapid <span className="text-first-color">Food Delivery</span> at Your
          Doorstep
        </h1>

        {/* Descrição */}
        <p className="text-center min-[1024px]:text-start text-base text-title-color">
          Your food will be at your doorstep in 30 minutes or less. Should we
          falter, your meal is on us.
        </p>

        {/* Botão de chamada para ação e link para "How to order" */}
        <div className="flex items-center gap-x-8">
          <Button
            title="Order Now"
            className="h-16 w-36 min-[1024px]:w-56 hover:scale-[.95]"
          />
          <a href="#" className="text-base font-bold underline ">
            How to order
          </a>
        </div>
      </div>

      {/* Coluna da imagem */}
      <div className="grid justify-center min-[1024px]:justify-end">
        <img
          src={heroImage}
          alt="Hero image"
          className="w-full h-auto max-w-[430px]"
        />
      </div>
    </section>
  );
};

export default Hero;
