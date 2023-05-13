import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  equipments: [
    {
      id: 1,
      name: "Dumbbell",
      description:
        "A dumbbell is a short barbell, usually 10 – 15 inches long. Dumbbell exercises are performed with a dumbbell in each hand. Most gyms have a dumbbell rack that has an assortment of fixed weight dumbbells. The dumbbells can also be used for a variety of cardio exercises.",
      rentalPrice: 1000,
      availability: "Available",
    },
    {
      id: 2,
      name: "Lawn Mower",
      description:
        "A lawn mower is a machine utilizing one or more revolving blades to cut a grass surface to an even height. The height of the cut grass may be fixed by the design of the mower, but generally is adjustable by the operator, typically by a single master lever, or by a lever or nut and bolt on each of the machine's wheels.",
      rentalPrice: 5000,
      availability: "Available",
    },
    {
      id: 3,
      name: "Jackhammer",
      description:
        "A jackhammer is a pneumatic or electro-mechanical tool that combines a hammer directly with a chisel. It was invented by William Mcreavy, who then sold the patent to Charles Brady King. Hand-held jackhammers are generally powered by compressed air, but some are also powered by electric motors.",
      rentalPrice: 1000,
      availability: "Available",
    },
  ],
};

const equipmentSlice = createSlice({
  name: "equipments",
  initialState,
  reducers: {
    addEquipment: (state, action) => {
      action.payload.id = state.equipments.length + 1;
      state.equipments.push(action.payload);
    },
    updateEquipment: (state, action) => {
      state.equipments = state.equipments.map((equipment) => {
        if (equipment.id === action.payload.id) {
          return action.payload;
        } else return equipment;
      });
    },
    deleteEquipment: (state, action) => {
      state.equipments = state.equipments.filter(
        (equipment) => equipment.id !== action.payload.id
      );
    },
    rentEquipment: (state, action) => {
      state.equipments = state.equipments.map((equipment) => {
        if (equipment.id === action.payload.id) {
          return { ...equipment, availability: false };
        } else return equipment;
      });
    },
  },
});

export const { addEquipment, updateEquipment, deleteEquipment, rentEquipment } =
  equipmentSlice.actions;

export default equipmentSlice.reducer;
