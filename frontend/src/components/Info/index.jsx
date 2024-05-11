import { useTranslation } from "react-i18next";
import "./../../i18n";

function Info() {
  const { t } = useTranslation();
  const Info = t("Info");
  const { title: titleWhoAreWe, description: descriptionWhoAreWe } = Info.whoAreWe;
  const { title: titleOurOrigins, description: descriptionOurOrigins } = Info.ourOrigins;

  const items = [
    {
      titulo: titleWhoAreWe,
      mensaje: descriptionWhoAreWe,
      estilo: "bg-top md:bg-top bg-info1",
    },
    {
      titulo: titleOurOrigins,
      mensaje: descriptionOurOrigins,
      estilo: "bg-top md:bg-top bg-info2",
    },
  ];

  return (
    <section className="">
      {items.map((item) => (
        <div key={item.titulo} className={`relative bg-scroll bg-cover bg-no-repeat min-w-full min-h-screen border-b border-gold/50 ${item.estilo}`}>
          <div className="absolute bottom-0 bg-secundary flex items-center justify-center mx-8 md:mx-14 mb-5 p-4 rounded-lg">
            <p className="absolute rounded-lg p-2 bg-secundary -top-8 -left-5 border font-medium text-2xl  text-primaryAriadna">{item.titulo}</p>
            <p className="font-thin text-xl text-primaryAriadna">{item.mensaje}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export { Info };
