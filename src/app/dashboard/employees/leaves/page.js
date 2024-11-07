"use client";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeaveDashboardCards from "../../../components/employees/leave-dashboard-cards";
import AddLeave from "../../../components/employees/add-leave";
import { useAuth } from "@/assets/hooks/use-auth";
import { fetchLeaveData } from "@/app/redux/features/employees";
import DeleteEditLeave from "../../../components/employees/delete-edit-leave";

const Leaves = () => {
  const { leave } = useSelector((store) => store.employee);
  const dispatch = useDispatch();
  const token = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(fetchLeaveData(token));
    }
  }, [token]);


  return (
    <>
      <AddLeave />
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
            {Array.isArray(leave) &&
              leave.map((leave, index) => (
                <tr
                  key={leave.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } text-xs border border-background`}
                >
                  <td className=" p-2">{leave?.leaveType}</td>
                  <td className=" p-2">{leave?.fromDate}</td>
                  <td className=" p-2">{leave?.toDate}</td>
                  <td className=" p-2">{leave?.days}</td>
                  <td className=" p-2">{leave?.reason}</td>
                  <td className=" p-2">Status</td>
                  <td className=" p-2 font-bold cursor-pointer">
                    <DeleteEditLeave {...{ leave }} />
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
