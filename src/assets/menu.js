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
  },
  {
    label: "Admin Panel",
    path: "/dashboard/admin-panel",
    icon: <RiAdminFill />,
  },
  {
    label: "Employees",
    icon: <FaUser />,
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
  {
    label: "Visitors",
    icon: <FaPerson />,
    children: [
      {
        label: "visits",
        path: "/dashboard/visitors",
        icon: <GoDotFill className="text-xs" />,
      },
      {
        label: "appointments",
        path: "/dashboard/visitors/appointments",
        icon: <GoDotFill className="text-xs" />,
      },
    ],
  },
  {
    label: "Reports",
    path: "/dashboard/reports",
    icon: <BiSolidReport />,
  },
];
