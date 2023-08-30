import reviewImage from "../assets/review-image.png";
import starIcon from "../assets/star-icon.svg";
import avatar from "../assets/avatar.png";

// Componente para a seção de avaliações (Reviews)
const Reviews = () => {
  return (
    <section
      id="reviews"
      className="max-container grid gap-y-10 gap-x-4 min-[1024px]:grid-cols-2 w-full items-center"
    >
      {/* Coluna de texto */}
      <div className="flex flex-col gap-y-5 min-[1024px]:gap-y-10 min-[1024px]:order-2">
        {/* Título de seção */}
        <div className="flex items-center gap-x-2">
          <span className="content-[''] w-10 h-[1px] bg-first-color"></span>
          <p className="text-first-color">What they are say</p>
        </div>

        {/* Título principal */}
        <h2 className="text-title-color text-4xl min-[1024px]:text-6xl font-bold">
          What People Are Saying About Us
        </h2>

        {/* Seção de avaliação */}
        <div className="flex flex-col gap-y-5 max-w-[500px]">
          <div className="flex items-center gap-x-10">
            <img src={avatar} alt="avatar" className="max-[1024px]:w-10" />
            <p className="text-xl font-bold">Sonia Marvolo</p>
          </div>

          {/* Comentário da revisão */}
          <p>
            The service provided is absolutely flawless and impressively swift.
            I&rsquo;m delighted with my experience ordering from this company.
          </p>
          <p className="font-bold flex gap-x-1">
            5.0{" "}
            {Array(5)
              .fill()
              .map((_, i) => (
                <img key={i} src={starIcon} alt={`star ${i + 1}`} />
              ))}
          </p>
        </div>
      </div>

      {/* Coluna da imagem */}
      <div className="grid justify-center min-[1024px]:justify-start min-[1024px]:order-1">
        <img src={reviewImage} alt="Hero image" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Reviews;
