import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../../services/customerService.js";
import "./Customers.css";

export const CustomerDetails = () => {
  // /customers/3
  // path="/customers/:customerId"

  const [customer, setCustomer] = useState({});
  const { customerId } = useParams(); // { customerId: 3}

  useEffect(() => {
    getCustomerById(customerId).then((data) => {
      const customerObj = data[0];
      setCustomer(customerObj);
    });
  }, [customerId]);

  return (
    <section className="customer">
      <header className="customer-header">{customer.user?.fullName}</header>
      <div>
        <span className="customer-info">Email : </span>
        {customer.user?.email}
      </div>
      <div>
        <span className="customer-info">Address : </span>
        {customer.address}
      </div>
      <div>
        <span className="customer-info">Phone Number: </span>
        {customer.phoneNumber}
      </div>
    </section>
  );
};
