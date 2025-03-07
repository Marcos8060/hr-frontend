"use client";
import { fetchAllUsers } from "@/app/redux/features/users";
import { deleteUser } from "@/app/redux/services/users";
import { useAuth } from "@/assets/hooks/use-auth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import EditUser from './edit-user'

const DeleteEditUser = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const token = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clearUser = async () => {
    const response = await deleteUser(user?.id, token);
    if (response === "Request failed with status code 403") {
      toast.error("You are not authorized to delete a user");
    } else {
      dispatch(fetchAllUsers(token));
      toast.success(response.message);
    }
  };

  return (
    <div>
      <BsThreeDots onClick={handleClick} className="cursor-pointer text-sm" />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
          <EditUser {...{ user }} />
        </MenuItem>
        <MenuItem>
          <p
            onClick={() => clearUser()}
            className="text-xs text-warning font-bold"
          >
            Delete
          </p>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DeleteEditUser;
