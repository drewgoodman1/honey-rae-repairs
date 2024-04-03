import "./App.css";
import { CustomerList } from "./components/customers/CustomersList.jsx";
import { Employees } from "./components/employees/Employees.jsx";
import { NavBar } from "./components/nav/NavBar.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { Route, Routes, Outlet } from "react-router-dom";
import { Welcome } from "./components/welcome/Welcome.jsx";
import { CustomerDetails } from "./components/customers/CustomerDetails.jsx";
import { EmployeeDetails } from "./components/employees/EmployeeDetails.jsx";

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
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="employees">
          <Route index element={<Employees />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />{" "}
          {/* /customers/:customerId */}
        </Route>
        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />{" "}
          {/* /customers/:customerId */}
        </Route>
      </Route>
    </Routes>
  );
};
