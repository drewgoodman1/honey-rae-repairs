import "./App.css";
import { CustomerList } from "./components/customers/CustomersList.jsx";
import { Employees } from "./components/employees/Employees.jsx";
import { NavBar } from "./components/nav/NavBar.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { Route, Routes, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="employees" element={<Employees />} />
      </Route>
    </Routes>
  );
};
