import { useEffect, useState } from "react";
import { useLocalStorage } from "../../components/useLocalStorage/index.jsx";

function useLocationData() {
  const {
    item: locationData,
    saveItem: saveLocationData,
    deleteItem: deleteLocationData,
    loading,
    error: errorStorage,
  } = useLocalStorage("LOCATION_DATA", {
    value: [],
  });

  let [errorLocationData, setErrorLocationData] = useState(false);
  let [loadingLocationData, setLoadingLocationData] = useState(true);

  useEffect(() => {
    if (locationData.value && loadingLocationData) setLoadingLocationData(false);
  }, [locationData, loadingLocationData]);

  useEffect(() => {
    if (locationData.value.length === 0 && !loadingLocationData) getLocationData();
  }, [locationData, loadingLocationData]);

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

  const getLocationData = async () => {
    //If the TRM has not been initilizad.
    if (!locationData || locationData?.value?.length === 0) await fetchLocationData();
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
    let uniqueDepartamentos = [];

    for (const item of locationData.value) {
      if (uniqueDepartamentos.findIndex((element) => element.id === item.c_digo_dane_del_departamento) === -1) {
        uniqueDepartamentos.push({
          id: item.c_digo_dane_del_departamento,
          name: item.departamento,
        });
      }
    }
    return uniqueDepartamentos;
  }

  function getMunicipios(codDepartamento) {
    let uniqueDepartamentos = locationData.value.filter((item) => item.c_digo_dane_del_departamento === codDepartamento);
    let uniqueMunicipios = [];

    for (const item of uniqueDepartamentos) {
      if (uniqueMunicipios.findIndex((element) => element.id === item.c_digo_dane_del_municipio) === -1) {
        uniqueMunicipios.push({
          id: item.c_digo_dane_del_municipio,
          name: item.municipio,
        });
      }
    }
    return uniqueMunicipios;
  }

  function getDepartamentoById(id_departamento) {
    let departamento = {
      id: id_departamento,
      name: "Not found",
    };
    let foundItem = locationData.value.find((item) => item.c_digo_dane_del_departamento === id_departamento);
    if (foundItem) departamento = { id: foundItem.c_digo_dane_del_departamento, name: foundItem.departamento };
    return departamento;
  }

  function getMunicipioById(id_municipio) {
    let municipio = {
      id: id_municipio,
      name: "Not found",
    };
    let foundItem = locationData.value.find((item) => item.c_digo_dane_del_municipio === id_municipio);
    if (foundItem) municipio = { id: foundItem.c_digo_dane_del_municipio, name: foundItem.municipio };
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
