// Componente para botões personalizados
const Button = ({ title, icon, className }) => {
  return (
    // Botão com estilos personalizados
    <button
      className={`bg-first-color ${className} rounded-lg flex items-center 
      justify-center gap-x-1 text-body-color font-bold transition-all ease-in-out
      duration-300 shadow-shadow-button shadow-xl`}
    >
      {/* Texto do botão */}
      {title}
      {/* Ícone do botão, se fornecido */}
      {icon}
    </button>
  );
};

export default Button;
