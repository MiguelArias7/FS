import Logo from "/ariadna_logo.png";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useLocationData } from "../../API/useLocationData";
import { useAriadnaApi } from "../../API/useAriadnaApi";
import { TightLayout } from "../../components/TightLayout";
import { useLocalStorage } from "../../components/useLocalStorage";
import { useNavigate } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();

  let { logout } = useAriadnaApi();

  const [allowRegister, setAllowRegister] = useState(true);
  const { item: dataLogin, loading: loadingLogin, deleteItem: deleteLogin } = useLocalStorage("USER_DATA", {});

  let [fields, setFields] = useState([]);

  let { getDepartamentoById, getMunicipioById, loadingLocationData } = useLocationData();
  let [departamento, setDepartamento] = useState({});
  let [municipio, setMunicipio] = useState({});

  useEffect(() => {
    if (!loadingLocationData && !loadingLogin && dataLogin?.id_departamento) {
      setDepartamento(getDepartamentoById(dataLogin.id_departamento));
    }
  }, [loadingLocationData, loadingLogin]);

  useEffect(() => {
    if (!loadingLocationData && !loadingLogin && dataLogin?.id_municipio) {
      setMunicipio(getMunicipioById(dataLogin.id_municipio));
    }
  }, [loadingLocationData, loadingLogin]);

  useEffect(() => {
    setFields([
      { id: "id_departamento", title: "Deparment", value: departamento.departamento },
      { id: "id_municipio", title: "Municipality", value: municipio.municipio },
      { id: "email", title: "Email", value: dataLogin?.email },
      { id: "address", title: "Address", value: dataLogin?.address },
    ]);
    console.log(dataLogin);
  }, [dataLogin, municipio, departamento]);

  return (
    <TightLayout>
      <section className="flex-grow flex flex-col justify-center overflow-hidden mt-4">
        <div className="grid grid-cols-2 md:grid-cols-2">
          <div className="pr-10 hidden md:flex flex-col items-center justify-center col-span-1 md:col-span-1 mb-4 md:mb-0 animate-fade_left">
            <img src={Logo} className="w-full hover:animate-pulse" alt="Ariadna CG"></img>
          </div>
          <div className="col-span-1 animate-fade_right">
            <div>
              <h1 className="font-medium text-5xl text-secundary">{dataLogin?.data?.name}</h1>
            </div>
            {fields.map((field) => (
              <div className="" key={field.id}>
                <h3 className=" text-3xl text-text font-thin " htmlFor={field.id}>
                  {field.title}
                </h3>
                <p className="text-secundary text-2xl font-thin">{field.value}</p>
              </div>
            ))}
            <button
              type="button"
              disabled={!allowRegister}
              className={`bg-tertiary text-secundary col-span-2 w-1/2  rounded-md transition-all delay-300 duration-200  ${
                !allowRegister ? "opacity-10 border" : "hover:scale-125 hover:bg-gold hover:text-primary"
              }`}
              onClick={() => {
                deleteLogin();
                logout();
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </section>
    </TightLayout>
  );
}

export { Profile };
