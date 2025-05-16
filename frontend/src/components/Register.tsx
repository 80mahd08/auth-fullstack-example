import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  interface FormData {
    name: string;
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful registration (e.g., save token, redirect)
        console.log("Registration successful:", data);
        navigate("/auth/login");
      } else {
        // Handle errors (e.g., show error message)
        console.error("Registration failed:", data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
