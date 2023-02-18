import React, { useContext, useState } from "react";
import InputBox from "../components/InputBox";
import { Button, Form } from "react-bootstrap";
import { DataContext } from "../context/DataContext";

const AddSales = () => {
  const { setSalesList } = useContext(DataContext);

  const [sales, setSales] = useState({
    product: "",
    quantity: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSales((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSales({
      product: "",
      quantity: "",
      amount: "",
    });

    setSalesList((prev) => [...prev, { id: Date.now(), ...sales }]);
  };

  return (
    <div className="my-5">
      <h1 className="text-center">Add Sale Entry</h1>

      <Form className="formContainer mx-auto mt-4" onSubmit={handleSubmit}>
        <InputBox
          label="Product Name"
          type="text"
          value={sales?.product}
          onChange={handleChange}
          name="product"
        />
        <InputBox
          label="Quantity"
          type="text"
          value={sales?.quantity}
          onChange={handleChange}
          name="quantity"
        />
        <InputBox
          label="amount"
          type="number"
          value={sales?.amount}
          onChange={handleChange}
          name="amount"
        />
        <Button variant="primary" className="w-100" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddSales;
