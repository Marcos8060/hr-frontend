"use client";
import React from "react";
import { useSelector } from "react-redux";
import LeaveDashboardCards from "../../../components/employees/leave-dashboard-cards";
import AddEditLeave from '../../../components/employees/add-edit-leave'

const Leaves = () => {
  const { users } = useSelector((store) => store.users);
  return (
    <>
    <AddEditLeave />
      <LeaveDashboardCards />
      <div className="overflow-x-auto bg-white rounded my-4">
        <h1 className="p-2 text-sm font-bold">Leaves</h1>
        <table className="table-auto w-full border-collapse bg-white h-[20vh] shadow-xl rounded-bl rounded-br">
          <thead className="bg-primary rounded-xl text-background px-4 text-xs">
            <tr>
              <th className="p-2 text-left">Leave Type</th>
              <th className="p-2 text-left">From</th>
              <th className="p-2 text-left">To</th>
              <th className="p-2  text-left">No of Days</th>
              <th className="p-2  text-left">Reason</th>
              <th className="p-2  text-left">Status</th>
              <th className="p-2  text-left ">Action</th>
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
                <td className=" p-2 flex items-center gap-2">
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src="https://images.pexels.com/photos/4925896/pexels-photo-4925896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
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
    </>
  );
};

export default Leaves;
