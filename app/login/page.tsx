"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Login submission logic
    const response = await axios.post(
      "http://localhost:5000/users/login",
      credentials
    );
    console.log(response.data);

    toast.success("Login Successful!", {
      duration: 5000,
      position: "top-center",
    });

    router.push("/");

    // Reset form fields
    setCredentials({
      email: "",
      password: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Please Login to continue</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <label htmlFor="password" className="block mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none hover:bg-indigo-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
