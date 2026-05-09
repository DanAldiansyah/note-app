import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("context harus digunakan di provider");
  }
  
  return context;
};

export default useAuthContext;
