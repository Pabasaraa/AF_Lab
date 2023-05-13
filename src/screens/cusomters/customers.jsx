import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCustomers } from "../../slices/customerSlice";

function Customers() {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteHandler = (id) => {
    dispatch(deleteCustomers(id));
  }

  return (
    <>
      <div>
        <h1 className= "mb-5">Customers</h1>
        <table style={{ margin: "0 auto", width: "100%"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
                <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
                <td>
                  <button onClick={() => navigate(`update/${customer.id}`)} style={{ margin: "5px"}}>Edit</button>
                  <button onClick={() => {deleteHandler(customer.id)}} style={{ margin: "5px"}}>Delete</button>
                  <button onClick={() => navigate(`${customer.id}`)} style={{ margin: "5px"}}>Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Customers;
