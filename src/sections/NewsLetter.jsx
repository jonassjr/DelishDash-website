import { Mail, Send } from "lucide-react";
import Button from "../components/Button";

// Componente para a seção de Newsletter
const NewsLetter = () => {
  return (
    <section
      id="newsletter"
      className="max-container bg-first-color flex flex-col gap-y-8 px-5 py-14 rounded-3xl items-center"
    >
      {/* Bloco de texto */}
      <div className="text-body-color text-center flex flex-col gap-y-8">
        {/* Título da seção */}
        <h2 className="text-[32px] min-[1024px]:text-4xl font-bold">
          Subscribe To Get Latest News Letter
        </h2>

        {/* Descrição da seção */}
        <p className="text-sm min-[1024px]:w-[650px] min-[1024px]:text-lg">
          “Unlock a world of exclusive updates and insights by subscribing to
          our newsletter. Stay informed about the latest trends, special
          promotions, and upcoming events”
        </p>
      </div>

      {/* Bloco de entrada de e-mail e botão */}
      <div className="flex w-fit justify-center relative">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="exemple@email.com"
          className="h-[60px] w-full max-w-[420px] pl-12 pr-16 rounded-xl"
        />

        {/* Ícone de e-mail */}
        <Mail className="absolute top-5 left-4 text-first-color" />

        {/* Botão de envio */}
        <Button
          icon={<Send />}
          className="absolute top-[6.5px] right-[5px] p-3 shadow-transparent hover:scale-95"
        />
      </div>
    </section>
  );
};

export default NewsLetter;
