import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

const LoaderContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  function activateLoading() {
    setIsLoading(true);
  }

  function deactivateLoading() {
    setIsLoading(false);
  }

  const value = { isLoading, activateLoading, deactivateLoading };
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};

const useLoaderContext = () => {
  return useContext(LoaderContext);
};

export { useLoaderContext, LoaderContextProvider };
