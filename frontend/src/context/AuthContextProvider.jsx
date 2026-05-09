import { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { useReducer } from "react";

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    
  }, []);

  console.log("auth state : ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
