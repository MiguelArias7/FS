const url = "http://localhost:3000";
function useAriadnaApi() {
  const context = "user";
  async function login(email, password) {
    let body = {
      email: email,
      password: password,
    };
    let options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    return fetch(`${url}/${context}/login`, options);
  }

  function register(email, password, name, address, id_departamento, id_municipio) {
    let body = {
      email: email,
      password: password,
      address: address,
      name: name,
      id_departamento: id_departamento,
      id_municipio: id_municipio,
    };

    let options = {
      method: "POST",
      body: body ? JSON.stringify(body) : JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    };

    return fetch(`${url}/${context}/register`, options);
  }

  function logout() {
    return fetch(`${url}/${context}/logout`);
  }

  return {
    login,
    register,
    logout,
  };
}

export { useAriadnaApi };
