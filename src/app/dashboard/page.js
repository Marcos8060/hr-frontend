"use client";

import { useAuth } from "@/assets/hooks/use-auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardCards from "../components/dashboard-cards";
import { fetchAllUsers } from "../redux/features/users";
import LeaveGraph from "../components/employees/leave-graph";
import { Vacancies } from "../components/vacancies";
import UsersTable from "../components/admin-panel/users-table";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchGeneralLeaveData } from "../redux/features/employees";
import { fetchJobs } from "../redux/features/jobs";

const Dashboard = () => {
  const dispatch = useDispatch();
  const token = useAuth();
  const { users } = useSelector((store) => store.users);
  const { jobs } = useSelector((store) => store.jobs);
  const { allLeaves } = useSelector((store) => store.employee);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      dispatch(fetchAllUsers(token));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      Promise.all([
        dispatch(fetchGeneralLeaveData(token)),
        dispatch(fetchJobs()),
      ])
        .then(() => {
          setLoading(false);
        })
        .catch(() => {})
        .finally(() => {
          setLoading(false);
        });
    }
  }, [token]);

  return (
    <>
      <DashboardCards {...{ users }} />
      <div className="flex gap-2">
        <div className="w-9/12 py-1">
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
        </div>
        <div className="w-3/12 py-1">
          {loading ? (
            <Skeleton
              baseColor="#c0c0c0"
              highlightColor="#f0f0f0"
              count={3}
              height={100}
            />
          ) : (
            <Vacancies {...{ jobs }} />
          )}
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
