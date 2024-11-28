"use client";
import React from "react";
import DeleteEditUser from "../../components/admin-panel/delete-edit-user";
import { FaUserCircle } from "react-icons/fa";

export default function UsersTable({ users }) {
  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white shadow-xl rounded-bl rounded-br">
          <thead className="bg-primary rounded-xl text-background px-4 text-xs">
            <tr>
              <th className="p-2 text-left">Username</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2  text-left">First Name</th>
              <th className="p-2  text-left">Last Name</th>
              <th className="p-2  text-left">Phone Number</th>
              <th className="p-2  text-left">Gender</th>
              <th className="p-2  text-left ">Department</th>
              <th className="p-2  text-left ">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) &&
              users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } text-xs border border-background`}
                >
                  <td className=" p-2 flex items-center gap-2">
                    {!user.profile?.image ? (
                      <FaUserCircle className="w-8 h-8" />
                    ) : (
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={user.profile?.image}
                        alt=""
                      />
                    )}

                    {user.username}
                  </td>
                  <td className=" p-2">{user.email}</td>
                  <td className=" p-2">{user.role}</td>
                  <td className=" p-2">{user.profile?.firstName}</td>
                  <td className=" p-2">{user.profile?.lastName}</td>
                  <td className=" p-2">{user.profile?.phoneNumber}</td>
                  <td className=" p-2">{user.profile?.gender}</td>
                  <td className=" p-2">{user.profile?.department}</td>
                  <td className=" p-2 font-bold cursor-pointer">
                    <DeleteEditUser {...{ user }} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
