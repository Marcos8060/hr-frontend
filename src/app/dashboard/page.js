"use client";

import { useAuth } from "@/assets/hooks/use-auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardCards from "../components/dashboard-cards";
import { fetchAllUsers } from "../redux/features/users";

const Dashboard = () => {
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
    </>
  );
};

export default Dashboard;
