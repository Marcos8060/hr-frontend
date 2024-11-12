import { BiSolidDashboard } from "react-icons/bi";
import { FaPerson } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { RiAdminFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


export const menu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <BiSolidDashboard />,
    role: ["Employee", "Admin", "Staff","Human Resource"]
  },
  {
    label: "Admin Panel",
    path: "/dashboard/admin-panel",
    icon: <RiAdminFill />,
    role: ["Admin","Human Resource"]
  },
  {
    label: "Employees",
    icon: <FaUser />,
    role: ["Admin","Human Resource","Staff"],
    children: [
      {
        label: "Leaves",
        path: "/dashboard/employees/leaves",
        icon: <GoDotFill className="text-xs" />,
      },
      {
        label: "vehicles",
        path: "/dashboard/trips/vehicles",
        icon: <GoDotFill className="text-xs" />,
      },
    ],
  },
];
