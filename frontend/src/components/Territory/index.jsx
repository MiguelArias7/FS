// import { BsArrow90DegDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";
// import Colombia from "/co.svg";
import Colombia from "/world.gif";

function Territory() {
  // Contenido en diferentes idiomas
  const { t } = useTranslation();
  const { title, description } = t("Territory");

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="p-10 animate-fade_left">
        <h3 className="font-medium text-2xl text-secundary">{title}</h3>
        <p className="text-text font-thin text-xl">{description}</p>
      </div>
      <div className="animate-fade_right">
        <img src={Colombia} alt="Colombia"></img>
      </div>
    </section>
  );
}

export { Territory };
