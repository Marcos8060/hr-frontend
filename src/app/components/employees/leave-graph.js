"use client";
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import exportingInit from "highcharts/modules/exporting";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@/assets/hooks/use-auth";
import { fetchLeaveData } from "@/app/redux/features/employees";

// Initialize the exporting module
if (typeof Highcharts === "object") {
  exportingInit(Highcharts);
}

const LeaveGraph = () => {
  const { leave } = useSelector((store) => store.employee);
  const dispatch = useDispatch();
  const token = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(fetchLeaveData(token));
    }
  }, [token]);

  // Filter leave types and get their counts
  const annualLeaveCount = Array.isArray(leave) ? leave.filter((item) => item.leaveType === "Annual Leave").length : 0;
  const medicalLeaveCount = Array.isArray(leave) ? leave.filter((item) => item.leaveType === "Medical Leave").length : 0;
  const academicLeaveCount = Array.isArray(leave) ? leave.filter((item) => item.leaveType === "Academic Leave").length : 0;
  const maternityLeaveCount = Array.isArray(leave) ? leave.filter((item) => item.leaveType === "Maternity Leave").length : 0;


  const [options, setOptions] = useState({
    chart: {
      type: "column",
      height: 300,
    },
    title: {
      text: "Leave Requests by Type",
      style: {
        fontSize: "14px",
      },
    },
    xAxis: {
      categories: ["Leave Types"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of Leave Requests",
      },
    },
    legend: {
      enabled: true,
    },
    credits: {
      enabled: false,
    },
    exporting: {
        enabled: false,
      },
    series: [
      {
        name: "Annual Leave",
        data: [annualLeaveCount],
        color: "#142687",
      },
      {
        name: "Medical Leave",
        data: [medicalLeaveCount],
        color: "red",
      },
      {
        name: "Academic Leave",
        data: [academicLeaveCount],
        color: "#54B206",
      },
      {
        name: "Maternity Leave",
        data: [maternityLeaveCount],
        color: "#95E0FB",
      },
    ],
  })

  return (
    <div className="my-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LeaveGraph;
