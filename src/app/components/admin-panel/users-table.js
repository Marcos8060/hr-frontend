"use client";
import React from "react";
import { deleteUser } from "@/app/redux/services/users";
import { useAuth } from "@/assets/hooks/use-auth";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "@/app/redux/features/users";
import toast from "react-hot-toast";

export default function UsersTable({ users }) {
  const dispatch = useDispatch();
  const token = useAuth();

  const clearUser = async (id) => {
    const response = await deleteUser(id, token);
    if (response === "Request failed with status code 404") {
      toast.error("User not found");
    } else {
      dispatch(fetchAllUsers(token));
      toast.success(response.message);
    }
  };

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
                <td className=" p-3 flex items-center gap-2">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src="https://images.pexels.com/photos/4925896/pexels-photo-4925896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                  {user.username}
                </td>
                <td className=" p-3">{user.email}</td>
                <td className=" p-3">{user.role}</td>
                <td className=" p-3">{user.profile?.firstName}</td>
                <td className=" p-3">{user.profile?.lastName}</td>
                <td className=" p-3">{user.profile?.phoneNumber}</td>
                <td className=" p-3">{user.profile?.gender}</td>
                <td className=" p-3">{user.profile?.department}</td>
                <td
                  className=" p-3 text-warning font-bold cursor-pointer"
                  onClick={() => clearUser(user.id)}
                >
                  Delete
                </td>
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
