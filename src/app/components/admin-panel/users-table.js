"use client";
import React from "react";

export default function UsersTable({ users }) {
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white shadow-xl rounded-bl rounded-br">
          <thead className="bg-primary rounded-xl text-background px-4 text-xs">
            <tr>
              {/* <th className="p-2 font-thin rounded-tl text-left">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                />
              </th> */}
              <th className="p-2 text-left">Username</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2  text-left">First Name</th>
              <th className="p-2  text-left">Last Name</th>
              <th className="p-2  text-left">Phone Number</th>
              <th className="p-2  text-left">Gender</th>
              <th className="p-2  text-left ">Department</th>
              <th className="p-2  text-left ">Action</th>
              {/* <th className=" p-2 font-thin text-left rounded-tr">Job Title</th> */}
              {/* <th className=" ">Employment Type</th> */}
              {/* <th className=" ">Employment Status</th> */}
              {/* <th className=" ">Supervisor</th> */}
              {/* <th className=" ">Bank Account</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } text-xs border border-background`}
              >
                {/* <td className=" p-3">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                  />
                </td> */}
                <td className=" p-3">{user.username}</td>
                <td className=" p-3">{user.email}</td>
                <td className=" p-3">{user.role}</td>
                <td className=" p-3">{user.profile?.firstName}</td>
                <td className=" p-3">{user.profile?.lastName}</td>
                <td className=" p-3">{user.profile?.phoneNumber}</td>
                <td className=" p-3">{user.profile?.gender}</td>
                <td className=" p-2">{user.profile?.department}</td>
                <td className=" p-2 text-warning font-bold">Delete</td>
                {/* <td className=" p-2">{user.profile?.jobTitle}</td> */}
                {/* <td className=" p-2">{user.profile?.employmentType}</td> */}
                {/* <td className=" p-2">{user.profile?.employmentStatus}</td> */}
                {/* <td className=" p-2">{user.profile?.supervisor}</td> */}
                {/* <td className=" p-2">{user.profile?.bankAccount}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
