import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();

    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className=" font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 my-4 w-full">
          <label className="block text-gray-600 text-sm font-normal">
            First Name:
          </label>
          <input
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            type="text"
          />
        </div>
        <div className="items-center justify-center h-14 my-4 w-full">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name:
          </label>
          <input
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            type="text"
          />
        </div>
        <div className="items-center justify-center h-14 my-4 w-full">
          <label className="block text-gray-600 text-sm font-normal">
            Email:
          </label>
          <input
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="emailId"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            type="email"
          />
        </div>
        <div className="items-center justify-center h-14 my-4 w-full space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
          >
            Save
          </button>
          <button className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
