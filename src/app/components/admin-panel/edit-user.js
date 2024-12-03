"use client";
import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { toast } from "react-hot-toast";
import Popover from "@mui/material/Popover";
import { editUser } from "@/app/redux/services/users";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "@/app/redux/features/users";
import { useAuth } from "@/assets/hooks/use-auth";

const EditUser = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const token = useAuth();

  const handleClickPopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopOver = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const initialValues = {
    username: user?.username || "",
    email: user?.email || "",
    password: user?.password || "",
    role: user?.role || "",
  };

  const handleEditUser = async (formValue, helpers) => {
    setLoading(true);
    const response = await editUser(formValue,user?.id,token);
    if (response === "Request failed with status code 403") {
      toast.error("You are not authorized to edit a user");
      handleClosePopOver();
      setLoading(false);
    } else {
      helpers.resetForm();
      toast.success("edit successful");
      handleClosePopOver();
      dispatch(fetchAllUsers(token));
      setLoading(false);
    }
  };

  return (
    <section>
      <p onClick={handleClickPopOver} className="text-xs font-bold text-green">Edit</p>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopOver}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className="px-2 py-4">
          <Formik initialValues={initialValues} onSubmit={handleEditUser}>
            <Form className="">
              <div className="w-full flex gap-2 items-center">
                <Field
                  className="block border border-gray py-2 text-xs rounded px-4 focus:outline-none"
                  type="text"
                  placeholder="Username"
                  name="username"
                  required
                />
                <Field
                  className="block border border-gray py-2 text-xs rounded px-4 focus:outline-none"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="mt-2 mb-2 flex items-center gap-2">
                <Field
                  className="block border border-gray py-2 text-xs rounded px-4 focus:outline-none"
                  type="text"
                  placeholder="Password"
                  name="password"
                  required
                />
                <Field
                  as="select"
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  name="role"
                >
                  <option value="" disabled>
                    ---assign role---
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="Employee">Employee</option>
                  <option value="Staff">Staff</option>
                  <option value="Human Resource">Hr Manager</option>
                </Field>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary px-4 py-2 rounded text-xs text-white flex"
                >
                  {loading && (
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#1C64F2"
                      />
                    </svg>
                  )}
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Popover>
    </section>
  );
};

export default EditUser;
