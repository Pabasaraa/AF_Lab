import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function EquipmentDetail() {
    const [selectedEquipment, setSelectedEquipment] = useState({});

    const equipments = useSelector(state => state.equipments.equipments);
    const params = useParams();

    useEffect(() => {
        equipments.map((equipment) => {
            if(equipment.id == params.id) {
                setSelectedEquipment(equipment);
                return;
            }else return;
        });
    }, [equipments]);

  return (
    <div>
        <h1 className="mb-5">Book Details</h1>
        <div style={{ display: "block", width: "60%", margin: "0 auto"}}>
            <div>
                <label className="mb-2" style={{float: "left", paddingLeft: "10px", backgroundColor: "white", color: "black"}}>
                    Equipment Name:
                </label>

                <p style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)", padding: "10px"}}><b>{selectedEquipment.name}</b></p>
            </div>
            <div>
                <label className="mb-2" style={{float: "left", paddingLeft: "10px", backgroundColor: "white", color: "black"}}>
                    Details:
                </label>

                <p style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)", padding: "10px"}}><b>{selectedEquipment.description}</b></p>
            </div>
            <div>
                <label className="mb-2" style={{float: "left", paddingLeft: "10px", backgroundColor: "white", color: "black"}}>
                    Rental Price:
                </label>

                <p style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)", padding: "10px"}}><b>{selectedEquipment.rentalPrice}</b></p>
            </div>
            <div>
                <label className="mb-2" style={{float: "left", paddingLeft: "10px", backgroundColor: "white", color: "black"}}>
                    Availability:
                </label>

                <p style={{width: "100%", backgroundColor: "white", color: "black", borderRadius: "5px", border: "1px solid rgba(0, 0, 0, 0.5)", padding: "10px"}}><b>{selectedEquipment.availability}</b></p>
            </div>
        </div>
    </div>
  )
}

export default EquipmentDetail;