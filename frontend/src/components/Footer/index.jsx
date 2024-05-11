import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { withIsVisible } from "../withIsVisible";
import { useTranslation } from "react-i18next";

function Footer() {
  // Contenido en diferentes idiomas
  const { t } = useTranslation();
  const { socialMedia, branches, message } = t("Footer");

  const socialMediaContent = {
    title: socialMedia.title,
    items: [
      {
        name: socialMedia.items[0].name,
        message: socialMedia.items[0].message,
        icono: <AiOutlineFacebook className="text-2xl hover:md:animate-wiggle_faster"></AiOutlineFacebook>,
        colorHover: "hover:bg-facebook",
        link: "https://www.facebook.com/AriadnaCommunicationsGroup?locale=es_LA",
      },
      {
        name: socialMedia.items[1].name,
        message: socialMedia.items[1].message,
        icono: <AiOutlineInstagram className="text-2xl hover:md:animate-wiggle_faster"></AiOutlineInstagram>,
        colorHover: "hover:bg-instagram",
        link: "https://www.instagram.com/ariadnacgglobal/",
      },
    ],
  };

  const branchesContent = {
    title: branches.title,
    items: [
      {
        city: branches.items[0].city,
        address: branches.items[0].address,
        icon: <MdOutlinePlace className="text-2xl"></MdOutlinePlace>,
        linkAdress: "https://maps.app.goo.gl/TGBYJTeiYbt4tea5A",
      },
      {
        city: branches.items[1].city,
        address: branches.items[1].address,
        icon: <MdOutlinePlace className="text-2xl"></MdOutlinePlace>,
        linkAdress: "https://maps.app.goo.gl/8sWenswd5xQNBHqU7",
      },
    ],
  };

  return (
    <footer className="bg-secundary rounded-t-lg ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-medium">{socialMediaContent.title}</h1>
          <div>
            {socialMediaContent.items.map((socialMedia) => (
              <div key={socialMedia.name} className="m-2 font-thin text-xl">
                <div className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 border-2 border-primary rounded-full ${socialMedia.colorHover}`}>
                    {socialMedia.link ? (
                      <a target="_blank" rel="noopener noreferrer" href={`${socialMedia.link}`} className="hover:underline" aria-label={socialMedia.name}>
                        {socialMedia.icono}
                      </a>
                    ) : (
                      <>{socialMedia.icono}</>
                    )}
                  </div>
                  <div className="m-2">
                    <p className="text-base md:text-lg">
                      {socialMedia.link ? (
                        <a target="_blank" rel="noopener noreferrer" href={`${socialMedia.link}`} className="hover:underline">
                          {socialMedia.message}
                        </a>
                      ) : (
                        <>{socialMedia.message}</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Información de contacto */}
        <div className="flex flex-col items-center ">
          <h1 className="font-medium text-2xl ">{branchesContent.title}</h1>
          <div className="px-5 font-thin text-xl">
            {branchesContent.items.map((contacto) => (
              <div key={contacto.city} className="grid grid-cols-7 m-2 items-center">
                <div className={`flex items-baseline justify-center  `}>
                  <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center hover:md:animate-pulse">{contacto.icon}</div>
                </div>
                <div className=" col-span-6 text-base md:text-lg">
                  <div className="m-2">
                    <a target="_blank" rel="noopener noreferrer" href={`${contacto.linkAdress}`} className="hover:underline">
                      <p>
                        {contacto.city} - {contacto.address}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Derechos reservados y tema de políticas */}
      <div className="flex flex-col items-center">
        <p className=" font-thin text-xl m-4 md:my-6">{message}</p>
      </div>
    </footer>
  );
}

const FooterWithIsVisible = withIsVisible(Footer);

export { Footer, FooterWithIsVisible };
