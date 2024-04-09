import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService.js";
import { User } from "../../users/User.jsx";
import { Link } from "react-router-dom";
import "./Customers.css";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => (
        <Link key={customerObj.id} to={`/customers/${customerObj.id}`}>
          <User key={customerObj.id} user={customerObj} />
        </Link>
      ))}
    </div>
  );
};
