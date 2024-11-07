"use client";
import { useAuth } from "@/assets/hooks/use-auth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import EditLeave from "./update-leave";
import { deleteLeave } from "@/app/redux/services/employees";
import { fetchLeaveData } from "@/app/redux/features/employees";

const DeleteEditLeave = ({ leave }) => {
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

  const clearLeave = async () => {
    const response = await deleteLeave(leave?.id, token);
    if (response === "Request failed with status code 404") {
      toast.error("Leave not found");
    } else {
      dispatch(fetchLeaveData(token));
      toast.success(response.message);
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
          <EditLeave {...{ leave, handleCloseMenu }} />
        </MenuItem>
        <MenuItem>
          <p
            onClick={() => clearLeave()}
            className="text-xs text-warning font-bold"
          >
            Delete
          </p>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DeleteEditLeave;
