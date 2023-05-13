import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomers } from '../../slices/customerSlice';

function UpdateCustomer() {
    const [updatedCustomer, setUpdatedCustomer] = useState({});

    const customers = useSelector((state) => state.customers.customers);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const customer = customers.filter((customer) => customer.id === parseInt(params.id));
        setUpdatedCustomer(customer[0]);
    }, [customers, params.id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCustomer({ ...updatedCustomer, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCustomers({id: params.id, ...updatedCustomer}));
        navigate("/customers")
    }

  return (
    <div>
        <h1 className="mb-5">Update Equipments</h1>
        <form onSubmit={handleSubmit}>
            <div style={{ display: "block", width: "60%", margin: "0 auto"}}>
                <div>
                    <label className="mb-2" style={{float: "left"}}>
                        Customer Name:
                    </label>
                </div>
                <input style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)"}} 
                    onChange={handleChange} 
                    type="text"
                    defaultValue={updatedCustomer.name}
                    name="name"/>
            </div>
            <div style={{ display: "block", width: "60%", margin: "0 auto"}}>
                <div>
                    <label className="mb-2" style={{float: "left"}}>
                        Address:
                    </label>
                </div>
                <input style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)"}} 
                    onChange={handleChange} 
                    type="text" 
                    defaultValue={updatedCustomer.address}
                    name="address"/>
            </div>
            <div style={{ display: "block", width: "60%", margin: "0 auto"}}>
                <div>
                    <label className="mb-2" style={{float: "left"}}>
                        Phone:
                    </label>
                </div>
                <input style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)"}} 
                onChange={handleChange} 
                type="text" 
                defaultValue={updatedCustomer.phone}
                name="phone" />
            </div>

            <button type='submit' className='mt-4'>Update</button>
        </form>
    </div>
  )
}

export default UpdateCustomer