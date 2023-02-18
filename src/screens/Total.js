import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Total = () => {
  const { salesList } = useContext(DataContext);
  const totalAmount = salesList.reduce(
    (acc, curVal) => (acc += parseFloat(curVal.amount)),
    0
  );

  return (
    <div className="container mt-5 ">
      <h1 className="fw-bold text-center">
        Today's Total Revenue is {totalAmount.toFixed(2)}
      </h1>
    </div>
  );
};

export default Total;
