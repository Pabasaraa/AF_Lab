import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCustomers } from '../../slices/customerSlice';

function AddCustomers() {
    const [newCustomer, setNewCustomer] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCustomer({ ...newCustomer, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCustomers(newCustomer));
        navigate("/customers")
    }

  return (
    <div>
        <h1 className="mb-5">Add Customer</h1>
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
                name="phone" />
            </div>

            <button type='submit' className='mt-4'>Add</button>
        </form>
    </div>
  )
}

export default AddCustomers