import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CustomerDetails() {
    const [selectedCustomer, setSelectedCustomer] = useState({});

    const customers = useSelector(state => state.customers.customers);
    const params = useParams();

    useEffect(() => {
        customers.map((customer) => {
            if(customer.id == params.id) {
                setSelectedCustomer(customer);
                return;
            }else return;
        });
    }, [customers]);

  return (
    <div>
        <h1 className="mb-5">Book Details</h1>
        <div style={{ display: "block", width: "60%", margin: "0 auto"}}>
            <div>
                <label className="mb-2" style={{float: "left", paddingLeft: "10px", backgroundColor: "white", color: "black"}}>
                    Customer Name:
                </label>

                <p style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)", padding: "10px"}}><b>{selectedCustomer.name}</b></p>
            </div>
            <div>
                <label className="mb-2" style={{float: "left", paddingLeft: "10px", backgroundColor: "white", color: "black"}}>
                    Address:
                </label>

                <p style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)", padding: "10px"}}><b>{selectedCustomer.address}</b></p>
            </div>
            <div>
                <label className="mb-2" style={{float: "left", paddingLeft: "10px", backgroundColor: "white", color: "black"}}>
                    Phone:
                </label>

                <p style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)", padding: "10px"}}><b>{selectedCustomer.phone}</b></p>
            </div>
        </div>
    </div>
  )
}

export default CustomerDetails;