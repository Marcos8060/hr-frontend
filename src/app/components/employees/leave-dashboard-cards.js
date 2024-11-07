import React from "react";
import { HiUsers } from "react-icons/hi2";

const LeaveDashboardCards = ({ leave }) => {


  // filter full time employees
  const annualLeave = Array.isArray(leave) && leave.filter(( item) => item.leaveType === 'Annual Leave')
  const medicalLeave = Array.isArray(leave) && leave.filter(( item) => item.leaveType === 'Medical Leave')
  const academicLeave = Array.isArray(leave) && leave.filter(( item) => item.leaveType === 'Academic Leave')
  const maternityLeave = Array.isArray(leave) && leave.filter(( item) => item.leaveType === 'Maternity Leave')
    
  return (
    <section className="md:flex md:space-y-0 space-y-2 items-center gap-2 justify-between">
      <div className="bg-white rounded text-sm w-full px-6 py-4 space-y-4 shadow">
        <div className="flex items-center gap-2 font-bold">
          <HiUsers />
          <p className="text-xs">Annual Leave</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{annualLeave?.length}</p>
          <p className="text-xs font-bold text-green">100%</p>
        </div>
      </div>
      <div className="bg-white rounded text-sm w-full px-6 py-4 space-y-4 shadow">
        <div className="flex items-center gap-2 font-bold">
          <HiUsers />
          <p className="text-xs">Medical Leave</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{medicalLeave?.length}</p>
          <p className="text-xs font-bold text-green">100%</p>
        </div>
      </div>
      <div className="bg-white rounded text-sm w-full px-6 py-4 space-y-4 shadow">
        <div className="flex items-center gap-2 font-bold">
          <HiUsers />
          <p className="text-xs">Academic Leave</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{academicLeave?.length}</p>
          <p className="text-xs font-bold text-green">100%</p>
        </div>
      </div>
      <div className="bg-white rounded text-sm w-full px-6 py-4 space-y-4 shadow">
        <div className="flex items-center gap-2 font-bold">
          <HiUsers />
          <p className="text-xs">Maternity Leave</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{maternityLeave?.length}</p>
          <p className="text-xs font-bold text-green">100%</p>
        </div>
      </div>
    </section>
  );
};

export default LeaveDashboardCards;
