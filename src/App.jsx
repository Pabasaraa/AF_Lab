import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Equipments from './screens/equipments/equipments'
import AddEquipments from './screens/equipments/addEquipments'
import UpdateEquipments from './screens/equipments/updateEquipments'
import EquipmentDetail from './screens/equipments/euipmentDetail'

import Customers from './screens/cusomters/customers'
import AddCustomers from './screens/cusomters/addCustomers'
import UpdateCustomer from './screens/cusomters/updateCustomers'
import CustomerDetails from './screens/cusomters/customerDetail'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/equipments/add" element={<AddEquipments />} />
        <Route path="/equipments/update/:id" element={<UpdateEquipments />} />
        <Route path="/equipments/:id" element={<EquipmentDetail />} />

        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/add" element={<AddCustomers />} />
        <Route path="/customers/update/:id" element={<UpdateCustomer />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
      </Routes>
    </Router>
  )
}

export default App
