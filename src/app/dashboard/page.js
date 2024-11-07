"use client";

import { useAuth } from "@/assets/hooks/use-auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardCards from "../components/dashboard-cards";
import { fetchAllUsers } from "../redux/features/users";
import LeaveGraph from "../components/employees/leave-graph";
import { Vacancies } from "../components/vacancies";
import UsersTable from "../components/admin-panel/users-table";

const Dashboard = () => {
  const dispatch = useDispatch();
  const token = useAuth();
  const { users } = useSelector((store) => store.users);

  useEffect(() => {
    if (token || users?.length === 0) {
      dispatch(fetchAllUsers(token));
    }
  }, [token]);
  return (
    <>
      <DashboardCards {...{ users }} />
      <div className="flex gap-2">
        <div className="w-9/12">
          <LeaveGraph />
        </div>
        <div className="w-3/12 mt-4">
          <Vacancies />
        </div>
      </div>
      <div className="bg-white shadow rounded-tl rounded-tr">
        <h1 className="p-2 text-sm font-bold">Employees</h1>
        <UsersTable {...{ users }} />
      </div>
    </>
  );
};

export default Dashboard;
