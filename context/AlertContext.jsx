// Imports
import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

const AlertBaseState = {
  visibility: false,
  message: "",
  type: "primary",
};

const acceptedAlertTypes = ["info", "warning", "success", "danger", "primary"];

const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState(AlertBaseState);

  const showAlert = (message, type = "primary") => {
    if (!message) {
      ((message = "Unknown error"), (type = "danger"));
    } else if (!acceptedAlertTypes.includes(type)) {
      type = "primary";
    }

    setAlert({
      visibility: true,
      message,
      type,
    });
  };

  const hideAlert = () => {
    setAlert(AlertBaseState);
  };

  const value = { alert, showAlert, hideAlert };
  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

const useAlertContext = () => {
  return useContext(AlertContext);
};

export { AlertContextProvider, useAlertContext };
