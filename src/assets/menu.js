import { BiSolidDashboard } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export const menu = [
  {
    label: "Admin Dashboard",
    path: "/dashboard",
    icon: <BiSolidDashboard />,
    role: ["Admin", "Human Resource"],
  },
  {
    label: "Employee Dashboard",
    path: "/dashboard/employee-dashboard",
    icon: <BiSolidDashboard />,
    role: ["Admin", "Human Resource", "Staff", "Employee"],
  },
  {
    label: "Admin Panel",
    path: "/dashboard/admin-panel",
    icon: <RiAdminFill />,
    role: ["Admin", "Human Resource"],
  },
  {
    label: "Employees",
    icon: <FaUser />,
    role: ["Admin", "Human Resource", "Staff", "Employee"],
    children: [
      {
        label: "Leaves",
        path: "/dashboard/employees/leaves",
        icon: <GoDotFill className="text-xs" />,
      },
      {
        label: "Departments",
        path: "/dashboard/employees/departments",
        icon: <GoDotFill className="text-xs" />,
      },
    ],
  },
  {
    label: "Human Resource",
    icon: <FaUser />,
    role: ["Admin", "Human Resource"],
    children: [
      {
        label: "Payroll",
        path: "/dashboard/human-resource",
        icon: <GoDotFill className="text-xs" />,
      },
      {
        label: "Clients",
        path: "/dashboard/human-resource",
        icon: <GoDotFill className="text-xs" />,
      },
      {
        label: "Projects",
        path: "/dashboard/human-resource",
        icon: <GoDotFill className="text-xs" />,
      },
      {
        label: "Jobs",
        path: "/dashboard/human-resource",
        icon: <GoDotFill className="text-xs" />,
      },
    ],
  },
  {
    label: "Resignation",
    path: "/dashboard/resignation",
    icon: <FaUser />,
    role: ["Admin", "Human Resource"],
  },
  {
    label: "Termination",
    path: "/dashboard/termination",
    icon: <FaUser />,
    role: ["Admin", "Human Resource"],
  },
];
