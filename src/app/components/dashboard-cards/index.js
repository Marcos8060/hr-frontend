import React from "react";
import { HiUsers } from "react-icons/hi2";

const DashboardCards = ({ users }) => {


  // filter full time employees
  const fullTimeEmployees = Array.isArray(users) && users.filter(( user) => user.profile?.employmentType === 'Full-time')
  const contractEmployees = Array.isArray(users) && users.filter(( user) => user.profile?.employmentType === 'Contract')
  const onLeaveEmployees = Array.isArray(users) && users.filter(( user) => user.profile?.employmentStatus === 'On Leave')
    
  return (
    <section className="md:flex md:space-y-0 space-y-2 items-center gap-2 justify-between">
      <div className="bg-white rounded text-sm w-full px-6 py-4 space-y-4 shadow">
        <div className="flex items-center gap-2 font-bold">
          <HiUsers />
          <p className="text-xs">Total Employees</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{users?.length}</p>
          <p className="text-xs font-bold text-green">100%</p>
        </div>
      </div>
      <div className="bg-white rounded text-sm w-full px-6 py-4 space-y-4 shadow">
        <div className="flex items-center gap-2 font-bold">
          <HiUsers />
          <p className="text-xs">Full Time Employees</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{fullTimeEmployees?.length}</p>
          <p className="text-xs font-bold text-green">100%</p>
        </div>
      </div>
      <div className="bg-white rounded text-sm w-full px-6 py-4 space-y-4 shadow">
        <div className="flex items-center gap-2 font-bold">
          <HiUsers />
          <p className="text-xs">Employees On Contract</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{contractEmployees?.length}</p>
          <p className="text-xs font-bold text-green">100%</p>
        </div>
      </div>
      <div className="bg-white rounded text-sm w-full px-6 py-4 space-y-4 shadow">
        <div className="flex items-center gap-2 font-bold">
          <HiUsers />
          <p className="text-xs">Employees On Leave</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl">{onLeaveEmployees?.length}</p>
          <p className="text-xs font-bold text-green">100%</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardCards;
