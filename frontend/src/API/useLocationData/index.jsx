import { useEffect, useState } from "react";
import { useLocalStorage } from "../../components/useLocalStorage/index.jsx";

function useLocationData() {
  const { item: locationData, saveItem: saveLocationData, deleteItem: deleteLocationData, loading, error: errorStorage } = useLocalStorage("LOCATION_DATA", []);

  let [errorLocationData, setErrorLocationData] = useState(false);
  let [loadingLocationData, setLoadingLocationData] = useState(true);

  useEffect(() => {
    if (locationData && loadingLocationData) setLoadingLocationData(false);
  }, [locationData]);

  useEffect(() => {
    if (locationData && !loadingLocationData) getLocationData();
  }, [loadingLocationData]);

  const fetchLocationData = async () => {
    try {
      console.log("fetchLocationData", "Getting data from API");
      setLoadingLocationData(true);
      let response = await fetch("https://www.datos.gov.co/resource/xdk5-pm3f.json");
      let data = await response.json();
      if (data.length === 0) throw new Error("No hay datos");
      setLocationData(data);
    } catch (error) {
      // Manejar errores si es necesario
      console.error("Error al hacer la petición:", error);
      setErrorLocationData(true);
    }
  };

  const isUpdateLocationData = () => {
    if (!locationData | (locationData.length === 0)) return true;
    return false;
  };

  const getLocationData = async () => {
    //If the TRM has not been initilizad.
    if (isUpdateLocationData()) await fetchLocationData();
  };

  const eraseLocationData = () => {
    deleteLocationData();
  };

  const setLocationData = (array) => {
    if (array.length === 0) return false;

    let newData = {
      value: array,
      fetchDate: new Date(),
    };
    saveLocationData(newData);
    return true;
  };

  function getDepartamentos() {
    // getLocationData();
    let uniqueDepartamentos = [];

    for (const item of locationData.value) {
      if (uniqueDepartamentos.findIndex((element) => element.c_digo_dane_del_departamento === item.c_digo_dane_del_departamento) === -1) {
        uniqueDepartamentos.push({
          c_digo_dane_del_departamento: item.c_digo_dane_del_departamento,
          departamento: item.departamento,
        });
      }
    }
    return uniqueDepartamentos;
  }

  function getMunicipios(codDepartamento) {
    // getLocationData();
    let uniqueDepartamentos = locationData.value.filter((item) => item.c_digo_dane_del_departamento === codDepartamento);

    console.log("uniqueDepartamentos", uniqueDepartamentos);
    let uniqueMunicipios = [];

    for (const item of uniqueDepartamentos) {
      if (uniqueMunicipios.findIndex((element) => element.c_digo_dane_del_municipio === item.c_digo_dane_del_municipio) === -1) {
        uniqueMunicipios.push({
          c_digo_dane_del_municipio: item.c_digo_dane_del_municipio,
          municipio: item.municipio,
        });
      }
    }
    return uniqueMunicipios;
  }

  function getDepartamentoById(id_departamento) {
    let departamento = {
      departamento: "Not found",
    };
    locationData.value.findIndex((item) => {
      if (item.c_digo_dane_del_departamento === id_departamento) departamento = item;
    });
    return departamento;
  }

  function getMunicipioById(id_municipio) {
    let municipio = {
      municipio: "Not found",
    };
    locationData.value.findIndex((item) => {
      if (item.c_digo_dane_del_municipio === id_municipio) municipio = item;
    });
    return municipio;
  }

  return {
    loading,
    errorStorage,
    locationData: locationData,
    getLocationData: getLocationData,
    setLocationData: setLocationData,
    eraseLocationData: eraseLocationData,
    errorLocationData: errorLocationData,
    loadingLocationData: loadingLocationData,
    getDepartamentos,
    getMunicipios,
    getDepartamentoById,
    getMunicipioById,
  };
}

export { useLocationData };
