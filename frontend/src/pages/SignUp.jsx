import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const { signUp, error, isLoading } = useSignUp();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(form);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="px-4 min-h-dvh flex justify-center items-center bg-(--primary)">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-(--secondary) rounded-md border border-gray-300"
      >
        <h1>Silahkan Daftar</h1>
        <label>Masukan Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <label>Masukan Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <div>{error ? <p className="error">{error}</p> : ""}</div>
        <div className="flex mt-4">
          <p>
            Sudah Punya Akun?{" "}
            <Link to="/signin" className="font-medium">
              Masuk
            </Link>
          </p>
          <button
            disabled={isLoading}
            className="py-2 px-6 border border-gray-300 rounded-sm"
          >
            Daftar
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
