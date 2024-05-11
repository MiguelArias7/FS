import { useEffect, useState } from "react";
import { useAriadnaApi } from "../useAriadnaApi";

function useLogin(email, password, address, id_departamento, id_municipio) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { register } = useAriadnaApi();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await register(email, password, address, id_departamento, id_municipio);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export { useLogin };
