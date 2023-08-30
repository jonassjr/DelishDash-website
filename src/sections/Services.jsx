import { ServicesItems } from "../constants";

// Componente para a seção de serviços
const Services = () => {
  return (
    <section
      id="services"
      className="max-container flex flex-col min-[1024px]:flex-row 
      min-[1024px]:justify-between border-b-2 min-[1024px]:border-t-2 
      border-[hsla(0, 0%, 44%, 0.6)] scroll-my-48"
    >
      {ServicesItems.map((item) => (
        // Item de serviço individual
        <article
          key={item.title}
          className="flex items-center gap-x-12 max-[1023px]:border-t-2
          border-[hsla(0, 0%, 44%, 0.6)] py-12"
        >
          {/* Ícone do serviço */}
          <div
            className="bg-first-color w-[94px] h-[94px] 
            rounded-[20px] grid place-items-center shadow-custom"
          >
            <img src={item.icon} alt="article icon" />
          </div>

          {/* Detalhes do serviço */}
          <div className="text-title-color flex flex-col gap-y-2">
            <p className="text-lg">{item.title}</p>
            <p className="text-sm">{item.subTitle}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Services;
