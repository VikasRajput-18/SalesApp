import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [salesList, setSalesList] = useState([]);
  return (
    <DataContext.Provider value={{ salesList, setSalesList }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
