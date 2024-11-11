"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@/assets/hooks/use-auth";
import { fetchGeneralLeaveData } from "@/app/redux/features/employees";
import ApproveLeave from '../../components/admin-panel/approve-leave'

const AllLeavesTable = () => {
  const { allLeaves } = useSelector((store) => store.employee);
  const dispatch = useDispatch();
  const token = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(fetchGeneralLeaveData(token));
    }
  }, [token]);
  return (
    <>
      <div className="overflow-x-auto bg-white rounded my-4">
        <h1 className="p-2 text-sm font-bold">Leaves</h1>
        <table className="table-auto w-full border-collapse bg-white h-[20vh] shadow-xl rounded-bl rounded-br">
          <thead className="bg-primary rounded-xl text-background px-4 text-xs">
            <tr>
              <th className="p-2 text-center">Leave Type</th>
              <th className="p-2 text-center">From</th>
              <th className="p-2 text-center">To</th>
              <th className="p-2 text-center">No of Days</th>
              <th className="p-2 text-center">Reason</th>
              <th className="p-2 text-center">Status</th>
              <th className="p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allLeaves.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-primary p-2 text-center font-bold"
                >
                  There are no leave(s) at the moment
                </td>
              </tr>
            ) : (
              Array.isArray(allLeaves) &&
              allLeaves.map((leave, index) => (
                <tr
                  key={leave.id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } text-xs border border-background`}
                >
                  <td className="p-2 text-center">{leave.leaveType}</td>
                  <td className="p-2 text-center">{leave.fromDate}</td>
                  <td className="p-2 text-center">{leave.toDate}</td>
                  <td className="p-2 text-center">{leave.days}</td>
                  <td className="p-2 text-center">{leave.reason}</td>
                  <td className="p-2 text-center">
                    <small
                      className={`${
                        leave.status === "Pending"
                          ? "bg-primary"
                          : leave.status === "Approved"
                          ? "bg-green"
                          : leave.status === "Rejected"
                          ? "bg-warning"
                          : "bg-gray"
                      } text-center text-white py-2 px-3 rounded-3xl`}
                    >
                      {leave.status}
                    </small>
                  </td>
                  <td className="p-2 font-bold cursor-pointer">
                    <div className="flex items-center justify-center">
                      <ApproveLeave {...{ leave }} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllLeavesTable;