import React, { useState } from "react";
import InputBox from "../components/InputBox";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      navigate("/addSales");
    }, 700);
  };

  return (
    <div className="my-5">
      <h1 className="text-center">Login Form</h1>

      <Form className="formContainer mx-auto mt-4" onSubmit={handleSubmit}>
        <InputBox
          label="Email"
          type="email"
          value={login?.email}
          onChange={handleChange}
          name="email"
        />
        <InputBox
          label="Password"
          type="password"
          value={login?.password}
          onChange={handleChange}
          name="password"
        />
        <Button variant="primary" className="w-100" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginScreen;
