import React, { useState } from "react";
import InputBox from "../components/InputBox";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(register);

    setTimeout(() => {
      navigate("/addSales");
    }, 700);
  };

  return (
    <div className="my-5">
      <h1 className="text-center">Register Form</h1>

      <Form className="formContainer mx-auto mt-4" onSubmit={handleSubmit}>
        <InputBox
          label="First Name"
          type="text"
          value={register?.firstName}
          onChange={handleChange}
          name="firstName"
        />
        <InputBox
          label="Last Name"
          type="text"
          value={register?.lastName}
          onChange={handleChange}
          name="lastName"
        />
        <InputBox
          label="Email"
          type="email"
          value={register?.email}
          onChange={handleChange}
          name="email"
        />
        <InputBox
          label="Password"
          type="password"
          value={register?.password}
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

export default RegisterScreen;
