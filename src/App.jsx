import "./App.css";
import { CustomerList } from "./components/customers/CustomersList.jsx";
import { Employees } from "./components/employees/Employees.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";

export const App = () => {
  return (
    <>
      <TicketList />
      <CustomerList />
      <Employees />
    </>
  );
};
