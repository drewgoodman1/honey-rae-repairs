import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userService.js";
import { User } from "../../users/User.jsx";
import "./Employees.css";

export const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((customerObj) => {
        return <User user={customerObj} />;
      })}
    </div>
  );
};
