"use client";
import React, { useEffect, useState } from "react";
import UsersTable from "../../components/admin-panel/users-table";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@/assets/hooks/use-auth";
import { fetchAllUsers } from "@/app/redux/features/users";
import CreateUsers from "@/app/components/admin-panel/create-users";
import DashboardCards from "@/app/components/dashboard-cards";
import LeaveGraph from "../../components/employees/leave-graph";
import AllLeavesTable from "../../components/employees/all-leaves-table";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchGeneralLeaveData } from "@/app/redux/features/employees";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const token = useAuth();
  const { users } = useSelector((store) => store.users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      dispatch(fetchAllUsers(token));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      dispatch(fetchGeneralLeaveData(token))
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [token]);

  return (
    <>
      <div className="flex items-center justify-end my-2">
        <CreateUsers />
      </div>
      <DashboardCards {...{ users }} />
      {loading ? (
        <Skeleton
          baseColor="#c0c0c0"
          highlightColor="#f0f0f0"
          count={3}
          height={100}
        />
      ) : (
        <LeaveGraph />
      )}
      <div className="bg-white shadow rounded-tr-lg rounded-tl-lg">
        <h1 className="text-sm font-bold p-2">Employees</h1>
        <UsersTable {...{ users }} />
      </div>
      <AllLeavesTable />
    </>
  );
};

export default AdminPanel;
