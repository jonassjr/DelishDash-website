import { CheckSquare } from "lucide-react";
import aboutImage from "../assets/about-image.png";
import { AboutUsItems } from "../constants";

// Componente para a seção "About Us"
const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="max-container grid gap-y-10 gap-x-4 min-[1024px]:grid-cols-2 w-full
      items-center scroll-my-48"
    >
      {/* Coluna de texto */}
      <div className="flex flex-col gap-y-5 min-[1024px]:gap-y-10 min-[1024px]:order-2">
        {/* Título de seção */}
        <div className="flex items-center gap-x-2">
          <span className="content-[''] w-10 h-[1px] bg-first-color"></span>
          <p className="text-first-color">Why choose Us?</p>
        </div>

        {/* Título principal */}
        <h2 className="text-title-color text-4xl min-[1024px]:text-6xl font-bold">
          Where Health Meets Flavor
        </h2>

        {/* Lista de itens */}
        <ul className="flex flex-col gap-y-5 text-base">
          {AboutUsItems.map((item) => (
            <li key={item.label} className="flex gap-x-5 text-title-color">
              <CheckSquare className="text-first-color" /> {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Coluna da imagem */}
      <div className="grid justify-center min-[1024px]:justify-start min-[1024px]:order-1">
        <img src={aboutImage} alt="Hero image" className="w-full h-auto " />
      </div>
    </section>
  );
};

export default AboutUs;
