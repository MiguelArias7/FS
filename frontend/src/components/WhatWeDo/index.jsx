import PropTypes from "prop-types";
import { useState } from "react";
import { useIsVisible } from "../useIsVisible";
import { useEffect, useRef } from "react";
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { Fa4 } from "react-icons/fa6";
import { Fa5 } from "react-icons/fa6";
import { Fa6 } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function VisibleComponent({ setContent, newContent, children }) {
  const ref = useRef();
  let isVisible = useIsVisible(ref);

  useEffect(() => {
    if (isVisible) {
      setContent(newContent);
    }
  }, [isVisible]);

  return <div ref={ref}>{children}</div>;
}

VisibleComponent.propTypes = {
  setContent: PropTypes.func,
  newContent: PropTypes.node,
  children: PropTypes.node,
};

function WhatWeDo() {
  let [content, setContent] = useState(<></>);

  // Contenido en diferentes idiomas
  const { t } = useTranslation();
  const ItemsText = t("WhatWeDo");

  let counter = 0;
  const arrContet = [
    <Fa1 className="w-full text-[400px] animate-fade_right" key="1" />,
    <Fa2 className="w-full text-[400px] animate-fade_right" key="2" />,
    <Fa3 className="w-full text-[400px] animate-fade_right" key="3" />,
    <Fa4 className="w-full text-[400px] animate-fade_right" key="4" />,
    <Fa5 className="w-full text-[400px] animate-fade_right" key="5" />,
    <Fa6 className="w-full text-[400px] animate-fade_right" key="6" />,
  ];
  const items = ItemsText.map((item) => ({ title: item.title, messages: item.messages, content: arrContet[counter++] }));

  return (
    <section>
      <div className="text-secundary grid grid-cols-1 md:grid-cols-2">
        {/* content */}
        <div>
          {items.map((item) => (
            <div key={item.title} className="min-h-screen flex flex-col items-center justify-center animate-fade_left">
              <VisibleComponent setContent={setContent} newContent={item.content}>
                <div className="p-5">
                  <h3 className="font-medium text-2xl text-secundary">{item.title}</h3>
                  {item.messages.map((mensaje) => (
                    <p key={mensaje} className="text-text font-thin text-xl mb-2">
                      {mensaje}
                    </p>
                  ))}
                </div>
              </VisibleComponent>
              {/* content lateral celular */}
              <div className="w-full md:m-5 md:invisible md:w-0 md:h-0 ">
                <div className="md:invisible">{item.content}</div>
              </div>
            </div>
          ))}
        </div>

        {/* content lateral en PC */}
        <div className="w-full h-0 md:h-auto  md:min-h-screen invisible md:visible">
          <div className="md:sticky  md:top-1/4 md:my-24">{content}</div>
        </div>
      </div>
    </section>
  );
}

export { WhatWeDo };
