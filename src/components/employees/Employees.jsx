import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userService.js";
import { User } from "../../users/User.jsx";
import { Link } from "react-router-dom";
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
      {employees.map((employeeObj) => {
        return (
          <Link to={`/employees/${employeeObj.id}`}>
            <User user={employeeObj} />
          </Link>
        );
      })}
    </div>
  );
};
