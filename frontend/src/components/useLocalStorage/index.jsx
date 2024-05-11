import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  // const [syncItems, setSyncItems] = React.useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    // setTimeout(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      // setSyncItems(false);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
    // }
    // , 50);
  }, []);

  const saveItem = (item) => {
    // const stringifiedTodos = JSON.stringify(newTodos);
    //Guardar en local storage
    try {
      localStorage.setItem(itemName, JSON.stringify(item));
      //setTodos
      setItem(item);
    } catch (error) {
      setError(error);
    }
  };

  const deleteItem = () => {
    try {
      localStorage.removeItem(itemName);
    } catch (error) {
      setError(error);
    }
  };

  const synchronizeItems = () => {
    setLoading(true);
    // setSyncItems(true);
  };

  return { item, saveItem, deleteItem, loading, error, synchronizeItems };
}

export { useLocalStorage };
