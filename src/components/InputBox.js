import React from "react";
import { Form } from "react-bootstrap";

const InputBox = ({ label, value, onChange, type, name }) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={`Enter ${label}`}
          required={true}
        />
      </Form.Group>
    </>
  );
};

export default InputBox;
