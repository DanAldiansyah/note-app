import { useState } from "react";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signUp = async (formData) => {
    setError(null);
    setIsLoading(true);

    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const json = await response.json();

    if (!json.success) {
      setIsLoading(false);
      setError(json.error);
    }

    if (json.success) {
      localStorage.setItem("user", JSON.stringify(json.data));
      dispatch({
        type: "LOGIN",
        payload: { token: json.data },
      });
      setIsLoading(false);
      alert(json.message);
      navigate("/");
    }
  };

  return { error, isLoading, signUp };
};

export default useSignUp;
