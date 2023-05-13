import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEquipment } from '../../slices/equipmentSlice';

function AddEquipments() {
    const [newEquipment, setNewEquipment] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEquipment({ ...newEquipment, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEquipment(newEquipment));
        navigate("/equipments")
    }

  return (
    <div>
        <h1 className="mb-5">Add Equipments</h1>
        <form onSubmit={handleSubmit}>
            <div style={{ display: "block", width: "60%", margin: "0 auto"}}>
                <div>
                    <label className="mb-2" style={{float: "left"}}>
                        Equipment Name:
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
                        Details:
                    </label>
                </div>
                <input style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)"}} 
                    onChange={handleChange} 
                    type="text" 
                    name="description"/>
            </div>
            <div style={{ display: "block", width: "60%", margin: "0 auto"}}>
                <div>
                    <label className="mb-2" style={{float: "left"}}>
                        Rental Price:
                    </label>
                </div>
                <input style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)"}} 
                onChange={handleChange} 
                type="text" 
                name="rentalPrice" />
            </div>
            <div style={{ display: "block", width: "60%", margin: "0 auto"}}>
                <div>
                    <label className="mb-2" style={{float: "left"}}>
                        Availability:
                    </label>
                </div>
                <input style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)"}} 
                onChange={handleChange} 
                type="text" 
                name="availability"/>
            </div>

            <button type='submit' className='mt-4'>Add</button>
        </form>
    </div>
  )
}

export default AddEquipments