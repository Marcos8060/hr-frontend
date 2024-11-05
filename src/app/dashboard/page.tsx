"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-primary text-sm font-bold mb-2">Dashboard</h1>
    </>
  );
};

export default Dashboard;
