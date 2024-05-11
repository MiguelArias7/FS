import { useEffect, useState } from "react";
import { useAriadnaApi } from "../useAriadnaApi";
import { useCookies } from "react-cookie";

function useLogin(email, password) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [setCookie] = useCookies(["token"]);
  let { login } = useAriadnaApi();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await login(email, password);
        const data = await response.json();
        setData(data);
        setCookie("token", data.token, { path: "/" }); // Set the cookie with the data.token
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
