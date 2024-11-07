"use client";
import React, { useEffect } from "react";
import UsersTable from "../../components/admin-panel/users-table";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@/assets/hooks/use-auth";
import { fetchAllUsers } from "@/app/redux/features/users";
import CreateUsers from "@/app/components/admin-panel/create-users";
import DashboardCards from "@/app/components/dashboard-cards";
import LeaveGraph from '../../components/employees/leave-graph'

const AdminPanel = () => {
  const dispatch = useDispatch();
  const token = useAuth();
  const { users } = useSelector((store) => store.users);

  useEffect(() => {
    if (token) {
      dispatch(fetchAllUsers(token));
    }
  }, [token]);
  return (
    <>
      <DashboardCards {...{ users }} />
      <LeaveGraph />
      <div className="flex items-center justify-end my-2">
        <CreateUsers />
      </div>
      <div className="bg-white shadow rounded-tr-lg rounded-tl-lg">
        <h1 className="text-sm font-bold p-2">Employees</h1>
        <UsersTable {...{ users }} />
      </div>
    </>
  );
};

export default AdminPanel;
