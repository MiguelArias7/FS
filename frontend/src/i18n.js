import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    returnObjects: true,
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: {
          Routes: [
            {
              path: "/",
              name: "Who are we?",
            },
            {
              path: "/register",
              name: "Register",
            },
            {
              path: "/login",
              name: "Login",
            },
            {
              path: "/profile",
              name: "Profile",
            },
          ],
          Info: {
            whoAreWe: {
              title: "Who are we?",
              description:
                "We are the independent group with the largest presence in the Americas, we have global coverage and focus on offering comprehensive services to provide precise and innovative solutions.",
            },
            ourOrigins: {
              title: "Our origins",
              description:
                "At Ariadna Communications Group we were born 25 years ago with a digital DNA that has transformed the industry. Inspired by the myth of Ariadna's thread, we are the path to solutions, helping our clients to get out of the labyrinth in which they find themselves. We are the independent group with the largest presence in the Americas, we have global coverage and focus on offering comprehensive services to provide accurate and innovative solutions.",
            },
          },
          WhatWeDo: [
            {
              title: "Artificial Intelligence",
              messages: [
                "Our methodology combines advanced data analytics and automated solutions to develop comprehensive strategies that enable our clients to differentiate themselves in a competitive marketplace.",
              ],
            },
            {
              title: "Strategy",
              messages: [
                "Strategy is the foundation of every project we are part of. we are part of. With an analytical approach, oriented towards the and with in-depth knowledge of the market and the category. and category knowledge, we develop precise, comprehensive plans to ensure impactful ensure impactful results.",
              ],
            },
            {
              title: "Creativity",
              messages: ["Our approach lies in disruptive and strategic creativity. We bring to life innovative ideas that connect with audiences and transform concepts into memorable campaigns."],
            },
            {
              title: "Media",
              messages: [
                "We segment to reach the right audience through key messages, planning and key messages, planning the brand positioning in the media precisely positioning in the media in a precise way to know where, when and how to impact them. how to impact them.",
              ],
            },
            {
              title: "Marketing",
              messages: [
                "Our Performance Marketing methodology covers the entire client journey with a deep understanding of the market. We use data and analytics to drive sustainable growth and each campaign is tuned to maximize ROI.",
              ],
            },
            {
              title: "Tech Solutions",
              messages: [
                "We innovate with tailor-made technological solutions that digital presence to increase business results. business results. Our technology expertise ensures that brands stay ahead in an ever-evolving digital.",
              ],
            },
          ],
          Territory: {
            title: "Territorial presence",
            description: "We are present in several Latin American countries and have strategic allies in the rest of the world.",
          },
          Footer: {
            message: "© 2024 Ariadna Communications Group.",
            branches: {
              title: "Our Branches",
              items: [
                {
                  city: "Manizales",
                  address: "Ariadna CG",
                },
                {
                  city: "Bogotá",
                  address: "Ariadna CG",
                },
              ],
            },
            socialMedia: {
              title: "Follow our social networks",
              items: [
                {
                  name: "Facebook",
                  message: "Like us on our profile",
                },
                {
                  name: "Instagram",
                  message: "Follow our account",
                },
              ],
            },
          },
        },
      },
      es: {
        translation: {
          Routes: [
            {
              path: "/",
              name: "¿Quiénes somos?",
            },
            {
              path: "/register",
              name: "Registrarse",
            },
            {
              path: "/login",
              name: "Login",
            },
            {
              path: "/profile",
              name: "Perfil",
            },
          ],

          Info: {
            whoAreWe: {
              title: "¿Quiénes somos?",
              description:
                "Somos el grupo independiente líder con presencia en toda América. Contamos con cobertura global y nos enfocamos en ofrecer servicios integrales para brindar soluciones precisas e innovadoras.",
            },
            ourOrigins: {
              title: "Nuestros orígenes",
              description:
                "En Ariadna Communications Group nacimos hace 25 años con un ADN digital que ha transformado la industria. Inspirados en el mito del hilo de Ariadna, somos el camino hacia las soluciones, ayudando a nuestros clientes a salir del laberinto en el que se encuentran. Somos el grupo independiente líder con presencia en toda América. Contamos con cobertura global y nos enfocamos en ofrecer servicios integrales para brindar soluciones precisas e innovadoras.",
            },
          },
          WhatWeDo: [
            {
              title: "Inteligencia Artificial",
              messages: [
                "Nuestra metodología combina analítica de datos avanzada y soluciones automatizadas para desarrollar estrategias integrales que permitan a nuestros clientes diferenciarse en un mercado competitivo.",
              ],
            },
            {
              title: "Estrategia",
              messages: [
                "La estrategia es la base de cada proyecto del que formamos parte. Abordamos los proyectos de manera analítica, orientados a resultados, con un profundo conocimiento del mercado y la categoría. Desarrollamos planes precisos e integrales para garantizar resultados impactantes.",
              ],
            },
            {
              title: "Creatividad",
              messages: [
                "Nuestro enfoque radica en la creatividad disruptiva y estratégica. Damos vida a ideas innovadoras que conectan con el público y transforman conceptos en campañas memorables.",
              ],
            },
            {
              title: "Medios",
              messages: [
                "Segmentamos para llegar al público adecuado a través de mensajes clave, planificando el posicionamiento de la marca en los medios de manera precisa para saber dónde, cuándo y cómo impactarlos.",
              ],
            },
            {
              title: "Marketing",
              messages: [
                "Nuestra metodología de Performance Marketing cubre todo el recorrido del cliente con un profundo conocimiento del mercado. Utilizamos datos y análisis para impulsar un crecimiento sostenible y cada campaña se optimiza para maximizar el retorno de la inversión (ROI).",
              ],
            },
            {
              title: "Soluciones Tecnológicas",
              messages: [
                "Innovamos con soluciones tecnológicas hechas a medida que mejoran su presencia digital para aumentar los resultados comerciales. Nuestra experiencia tecnológica garantiza que las marcas se mantengan a la vanguardia en un panorama digital en constante evolución.",
              ],
            },
          ],
          Territory: {
            title: "Presencia territorial",
            description: "Estamos presentes en varios países de Latinoamérica y contamos con aliados estratégicos en el resto del mundo.",
          },
          Footer: {
            message: "© 2024 Ariadna Communications Group.",
            branches: {
              title: "Nuestras sucursales",
              items: [
                {
                  city: "Manizales",
                  address: "Ariadna CG",
                },
                {
                  city: "Bogotá",
                  address: "Ariadna CG",
                },
              ],
            },
            socialMedia: {
              title: "Sigue nuestras redes sociales",
              items: [
                {
                  name: "Facebook",
                  message: "Danos me gusta en nuestro perfil",
                },
                {
                  name: "Instagram",
                  message: "Sigue nuestra cuenta",
                },
                {
                  name: "WhatsApp",
                  message: "Escríbenos a nuestro número",
                },
              ],
            },
          },
        },
      },
    },
  });
