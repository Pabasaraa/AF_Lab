import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateEquipment } from '../../slices/equipmentSlice';

function UpdateEquipments() {
    const [updatedEquipment, setUpdatedEquipment] = useState({});

    const equipments = useSelector((state) => state.equipments.equipments);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const equipment = equipments.filter((equipment) => equipment.id === parseInt(params.id));
        setUpdatedEquipment(equipment[0]);
    }, [equipments, params.id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedEquipment({ ...updatedEquipment, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateEquipment({id: params.id, ...updateEquipment}));
        navigate("/equipments")
    }

  return (
    <div>
        <h1 className="mb-5">Update Equipments</h1>
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
                    defaultValue={updatedEquipment.name}
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
                    defaultValue={updatedEquipment.description}
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
                defaultValue={updatedEquipment.rentalPrice}
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
                defaultValue={updatedEquipment.availability}
                name="availability"/>
            </div>

            <button type='submit' className='mt-4'>Update</button>
        </form>
    </div>
  )
}

export default UpdateEquipments