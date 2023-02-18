import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

function TopSales() {
  const { salesList } = useContext(DataContext);

  if (salesList.length === 0) {
    return (
      <div className="container no_data">
        <h1>Please Add Data Here</h1>
        <Link to="/addSales" className="click_to_add">
          Click here to add data
        </Link>
      </div>
    );
  } else {
    return (
      <Table striped bordered hover className="container mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Sales ID:</th>
            <th>Product Name</th>
            <th>Quanity</th>
            <th>Sales Amount</th>
          </tr>
        </thead>

        <tbody>
          {salesList?.map((list, id) => {
            return (
              <tr key={list?.id}>
                <td>{id + 1}</td>
                <td>SI{list?.id.toString().slice(-3)} </td>
                <td>{list.product}</td>
                <td>{list.quantity}</td>
                <td>{list.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default TopSales;
