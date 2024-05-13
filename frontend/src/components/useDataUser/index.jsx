import { useLocalStorage } from "../useLocalStorage";

function useDataUser() {
  const { item: dataLogin, loading: loadingLogin, deleteItem: deleteLogin, saveItem: saveLogin } = useLocalStorage("USER_DATA", {});

  return { dataLogin, loadingLogin, deleteLogin, saveLogin };
}

export { useDataUser };
