import { ArrowRight, Menu, ShoppingBag, X } from "lucide-react";
import { NavLinks } from "../constants";
import { useEffect, useState } from "react";
import Button from "./Button";

// Componente de navegação principal
const Nav = () => {
  // Estado para controlar a classe CSS quando o link está ativo
  const [activeLink, setActiveLink] = useState("home");

  // Estado para controlar o menu móbile aberto/fechado
  const [toggle, setToggle] = useState(false);

  // Estado para controlar a classe CSS quando a página está rolando
  const [scrollActive, setScrollActive] = useState(false);

  // Efeito para observar o evento de rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }

      // Efeito para observar o evento de rolagem da página
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const windowHeight = window.innerHeight;
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;

        if (sectionTop <= windowHeight / 2) {
          setActiveLink(section.id);
        }
      });
    };

    // Adiciona o ouvinte de evento de rolagem quando o componente é montado
    window.addEventListener("scroll", handleScroll);

    // Remove o ouvinte de evento de rolagem quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed padding-x w-full py-4 z-20 bg-body-color ${
        scrollActive
          ? "shadow-2xl transition-all duration-700"
          : "transition-all duration-700"
      } `}
    >
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="#home" className="text-3xl font-bold text-title-color">
          DelishDash
        </a>

        {/* Menu mobile */}
        <div
          className={`fixed ${
            toggle ? "top-0" : "-top-full"
          } left-0 bg-body-color w-full py-10 px-20 text-center 
              backdrop-blur transition-top duration-500 shadow-2xl z-10`}
        >
          <ul className="flex flex-col gap-y-10">
            {/* Mapeamento dos links de navegação */}
            {window.innerWidth < 1024 &&
              NavLinks.map((item) => (
                <li key={item.id}>
                  <a
                    onClick={() => {
                      setToggle(false);
                      setActiveLink(item.id);
                    }}
                    href={item.href}
                    className={`relative text-title-color text-lg font-medium transition-colors 
                    duration-300 hover:text-first-color hover:after:w-1/4
                    after:content-[''] after:w-0 after:h-[2px] after:bg-first-color 
                    after:absolute after:left-0 after:-bottom-2 after:transition-width after:duration-300 
                    ${activeLink === item.id ? "active" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
          </ul>

          {/* Botão para fechar menu mobile */}
          <div className="absolute top-5 right-4">
            <X
              className="text-title-color"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
        </div>

        {/* Menu desktop */}
        <div className="hidden min-[768px]:flex">
          <ul className="flex gap-x-10">
            {/* Mapeamento dos links de navegação */}
            {NavLinks.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => {
                    setActiveLink(item.id);
                  }}
                  href={item.href}
                  className={`relative text-title-color text-lg font-medium transition-colors 
                  duration-300 hover:text-first-color hover:after:w-1/4
                  after:content-[''] after:w-0 after:h-[2px] after:bg-first-color 
                  after:absolute after:left-0 after:-bottom-2 after:transition-width after:duration-300
                  ${activeLink === item.id ? "active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Itens do menu desktop */}
        <div className="hidden min-[1024px]:flex items-center gap-x-8">
          <ShoppingBag
            className="text-title-color cursor-pointer hover:text-first-color transition-all
           ease-in-out duration-300"
          />
          <Button
            className="h-16 w-36 hover:scale-[.95] nav__button"
            title="Sing Up"
            icon={<ArrowRight className="arrow" />}
          />
        </div>

        {/* Ícone do menu mobile */}
        <Menu
          className="text-title-color block min-[768px]:hidden"
          onClick={() => setToggle((prev) => !prev)}
        />
      </nav>
    </header>
  );
};

export default Nav;
