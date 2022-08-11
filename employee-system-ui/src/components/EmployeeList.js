import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-6">
      <div className="h-12">
        <button
          onClick={() => {
            navigate("/addEmployee");
          }}
          className="rounded bg-slate-600 mx-4 text-white py-2 px-6 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className=" bg-gray-200">
            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              First Name
            </th>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Last Name
            </th>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Email ID
            </th>
            <th className="text-center font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              Actions
            </th>
          </thead>
          <tbody className=" bg-white">
            <tr>
              <td className=" text-left px-6 py-4 whitespace-nowrap ">
                <div className=" text-sm text-gray-500 ">Nimrod</div>
              </td>
              <td>
                <div className=" text-sm text-gray-500 ">Ambetsa</div>
              </td>
              <td>
                <div className=" text-sm text-gray-500 ">ambetsa@yahoo.com</div>
              </td>
              <td className=" text-center px-6 py-4 whitespace-nowrap font-medium text-sm ">
                <a
                  href="#"
                  className=" text-indigo-600 hover:text-indigo-800 px-4 "
                >
                  Edit
                </a>
                <a href="#" className=" text-indigo-600 hover:text-indigo-800 ">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
