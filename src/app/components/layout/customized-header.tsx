"use client";
import React, { useContext } from "react";
import { authContext } from "../../../assets/context/use-context";
import { BsChevronDown } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { useAuth } from '../../../assets/hooks/use-auth'

const CustomizedHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logoutUser, user } = useContext(authContext);
  const auth = useAuth();

  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="h-[10vh] py-6 px-4 flex items-center justify-between">
      <div>
        <h1 className="font-bold text-2xl">Good morning {user?.username}</h1>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <span className=" text-sm">{user?.username}</span>
          <BsChevronDown onClick={handleClick} className=" cursor-pointer" />
        </div>
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
            <Link className="text-sm" href="/profile">Profile</Link>
          </MenuItem>
          <MenuItem onClick={logoutUser}>
            <p className="text-sm">Logout</p>
          </MenuItem>
        </Menu>
      </div>
    </section>
  );
};

export default CustomizedHeader;
