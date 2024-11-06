"use client";
import React, { useEffect } from "react";
import UsersTable from "../../components/admin-panel/users-table";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@/assets/hooks/use-auth";
import { fetchAllUsers } from "@/app/redux/features/users";
import CreateUsers from "@/app/components/admin-panel/create-users";

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
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-sm font-bold">Users</h1>
        <CreateUsers />
      </div>
      <UsersTable {...{ users }} />
    </>
  );
};

export default AdminPanel;
