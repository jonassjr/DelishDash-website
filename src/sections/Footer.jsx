import { FooterLinks, SocialMedia } from "../constants";

// Componente para o rodapé da página
const Footer = () => {
  return (
    <footer className="bg-first-color w-full h-full padding-x max-container">
      {/* Seção superior do rodapé */}
      <div className="flex  flex-col gap-x-40 gap-y-11 min-[1024px]:flex-row min-[1024px]:justify-between py-20">
        {/* Bloco de informações sobre a empresa */}
        <div className="text-body-color flex flex-col gap-y-4 ">
          <a href="#home" className="text-3xl font-bold">
            DelishDash
          </a>
          <p className="text-base w-44">Rapid Food Delivery at Your Doorstep</p>

          {/* Links das redes sociais */}
          <div className="flex gap-x-4">
            {SocialMedia.map((media) => (
              <a
                key={media.id}
                href={media.link}
                target="_blank"
                rel="noreferrer"
              >
                <media.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Links e categorias do rodapé */}
        <div className="flex flex-col gap-y-11 text-body-color min-[1024px]:flex-row min-[1024px]:gap-x-16 min-[1200px]:gap-x-32">
          {FooterLinks.map((footerLink) => (
            <div key={footerLink.title} className="flex flex-col gap-y-2">
              <h3 className="text-xl">{footerLink.title}</h3>
              <ul className="flex flex-col gap-y-1">
                {footerLink.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Texto de direitos autorais */}
      <div className="w-full py-6 border-t-2">
        <p className="text-center min-[1024px]:text-end text-body-color">
          {" "}
          © 2023 Logo All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
