import { configureStore } from "@reduxjs/toolkit";

import equipmentSlice from "./slices/equipmentSlice";
import customerSlice from "./slices/customerSlice";

const store = configureStore({
  reducer: {
    customers: customerSlice,
    equipments: equipmentSlice,
  },
});

export default store;
