import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteEquipment } from "../../slices/equipmentSlice";

function Equipments() {
  const equipments = useSelector((state) => state.equipments.equipments);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const deleteHandler = (id) => {
    dispatch(deleteEquipment(id));
  }

  return (
    <>
      <div>
        <h1 className= "mb-5">Equipments</h1>
        <table style={{ margin: "0 auto", width: "100%"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Equipment</th>
              <th>Description</th>
              <th>Rental Price</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((equipment) => (
                <tr key={equipment.id}>
                <td>{equipment.id}</td>
                <td>{equipment.name}</td>
                <td>{equipment.description}</td>
                <td>{equipment.rentalPrice}</td>
                <td>{equipment.availability}</td>
                <td>
                  <button onClick={() => navigate(`update/${equipment.id}`)} style={{ margin: "5px"}}>Edit</button>
                  <button onClick={() => {deleteHandler(equipment.id)}} style={{ margin: "5px"}}>Delete</button>
                  <button onClick={() => navigate(`${equipment.id}`)} style={{ margin: "5px"}}>Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Equipments;
