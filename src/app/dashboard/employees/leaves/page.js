"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeaveDashboardCards from "../../../components/employees/leave-dashboard-cards";
import AddLeave from "../../../components/employees/add-leave";
import { useAuth } from "@/assets/hooks/use-auth";
import { fetchGeneralLeaveData, fetchLeaveData } from "@/app/redux/features/employees";
import IndividualLeaveTable from '../../../components/employees/individual-leave-table'

const Leaves = () => {
  const { leaves,allLeaves } = useSelector((store) => store.employee);
  const dispatch = useDispatch();
  const token = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(fetchLeaveData(token));
      dispatch(fetchGeneralLeaveData(token));
    }
  }, [token]);

  return (
    <>
      <AddLeave />
      <LeaveDashboardCards {...{ allLeaves }} />
      <IndividualLeaveTable {...{ leaves }} />
    </>
  );
};

export default Leaves;
