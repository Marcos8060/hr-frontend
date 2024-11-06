"use client";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function UsersTable({ users }) {
  return (
    <div className="">
      <DataTable value={users} className="shadow" size="small">
        <Column field="username" header="Username" style={{ fontSize: '12px' }} bodyStyle={{ width: '150px' }}></Column>
        <Column field="email" header="Email" style={{ fontSize: '12px', width: '200px' }}></Column>
        <Column field="role" header="Role" style={{ fontSize: '12px', width: '100px' }}></Column>

        <Column
          field="profile.firstName"
          header="First Name"
          bodyStyle={{ width: "300px" }}
          style={{ fontSize: "12px" }}
        ></Column>
        <Column
          field="profile.lastName"
          header="Last Name"
          style={{ fontSize: "12px", width: "150px" }}
        ></Column>
        <Column
          field="profile.phoneNumber"
          header="Phone Number"
          style={{ fontSize: "12px", width: "150px" }}
        ></Column>
        <Column
          field="profile.gender"
          header="Gender"
          style={{ fontSize: "12px", width: "100px" }}
        ></Column>
        <Column
          field="profile.department"
          header="Department"
          style={{ fontSize: "12px", width: "180px" }}
        ></Column>
        <Column
          field="profile.jobTitle"
          header="Job Title"
          style={{ fontSize: "12px", width: "200px" }}
        ></Column>
        <Column
          field="profile.employmentType"
          header="Employment Type"
          style={{ fontSize: "12px", width: "150px" }}
        ></Column>
        <Column
          field="profile.employmentStatus"
          header="Employment Status"
          style={{ fontSize: "12px", width: "150px" }}
        ></Column>
        <Column
          field="profile.supervisor"
          header="Supervisor"
          style={{ fontSize: "12px", width: "150px" }}
        ></Column>
        <Column
          field="profile.bankAccount"
          header="Bank Account"
          style={{ fontSize: "12px", width: "150px" }}
        ></Column>
      </DataTable>
    </div>
  );
}
