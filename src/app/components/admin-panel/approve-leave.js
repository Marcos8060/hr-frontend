"use client";
import { useAuth } from "@/assets/hooks/use-auth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { approvedLeave } from "@/app/redux/services/employees";
import { fetchGeneralLeaveData, fetchLeaveData } from "@/app/redux/features/employees";

const ApproveLeave = ({ leave }) => {
  const [menuItem, setMenuItem] = useState(null);
  const open = Boolean(menuItem);
  const dispatch = useDispatch();
  const token = useAuth();

  const handleClick = (event) => {
    setMenuItem(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuItem(null);
  };

  const approvePayload = {
      leaveType: leave?.leaveType,
      fromDate: leave?.fromDate,
      toDate: leave?.toDate,
      days: leave?.days,
      reason: leave?.reason,
      status: "Approved",
  }

  const rejectPayload = {
      leaveType: leave?.leaveType,
      fromDate: leave?.fromDate,
      toDate: leave?.toDate,
      days: leave?.days,
      reason: leave?.reason,
      status: "Rejected",
  }

  const approveLeave = async () => {
    const response = await approvedLeave(approvePayload,leave?.id, token);
    if (response === "Request failed with status code 404") {
      toast.error("Leave not found");
    } else {
      dispatch(fetchGeneralLeaveData(token));
      toast.success('Leave approved');
      handleCloseMenu();
    }
  };

  const rejectLeave = async () => {
    const response = await approvedLeave(rejectPayload,leave?.id, token);
    if (response === "Request failed with status code 404") {
      toast.error("Leave not found");
    } else {
      dispatch(fetchLeaveData(token));
      dispatch(fetchGeneralLeaveData(token));
      toast.success('Leave rejected');
      handleCloseMenu();
    }
  };

  return (
    <div>
      <BsThreeDots onClick={handleClick} className="cursor-pointer text-sm" />
      <Menu
        id="basic-menu"
        anchorEl={menuItem}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <p
            onClick={() => approveLeave()}
            className="text-xs text-green font-bold"
          >
            Approve Leave
          </p>
        </MenuItem>
        <MenuItem>
          <p
            onClick={() => rejectLeave()}
            className="text-xs text-warning font-bold"
          >
            Reject Leave
          </p>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ApproveLeave;
