import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService.js";

export const Ticket = ({ ticket, currentUser }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  //get employees from DB and set to employees state var
  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setEmployees(employeesArray);
    });
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]);

  return (
    <section className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>
        </div>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {/*if the logged in user is an employee and there's no employee ticket associated with the service ticker,
          then a button to claim the ticket appears*/}
          {currentUser.isStaff && !assignedEmployee ? (
            <button className="btn btn-secondary">Claim</button>
          ) : (
            ""
          )}
          {/*if the logged in user is the assigned employee to the ticket and there is no date completed
          then a button to close the ticket should appear*/}
          {assignedEmployee?.userId === currentUser.id &&
          !ticket.dateCompleted ? (
            <button className="btn  btn-warning">Close</button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  );
};
