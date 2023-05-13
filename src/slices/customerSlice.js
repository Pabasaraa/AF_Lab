import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [
    {
      id: 1,
      name: "john doe",
      address: "123 main st",
      phone: "555-555-5555",
      rentedEquipments: [
        {
          id: 1,
          name: "Dumbbell",
        },
      ],
    },
    {
      id: 2,
      name: "Smith doe",
      address: "356 main st",
      phone: "555-555-5555",
      rentedEquipments: [
        {
          id: 1,
          name: "Jackhammer",
        },
      ],
    },
  ],
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomers: (state, action) => {
      action.payload.id = state.customers.length + 1;
      state.customers.push(action.payload);
    },
    updateCustomers: (state, action) => {
      state.customers = state.customers.map((customer) => {
        if (customer.id === action.payload.id) {
          return action.payload;
        } else return customer;
      });
    },
    deleteCustomers: (state, action) => {
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload.id
      );
    },
    rentEquipment: (state, action) => {
      state.customers = state.customers.map((customer) => {
        if (customer.id === action.payload.id) {
          return { ...customer, availability: false };
        } else return customer;
      });
    },
  },
});

export const { addCustomers, updateCustomers, deleteCustomers, rentEquipment } =
  customerSlice.actions;

export default customerSlice.reducer;
