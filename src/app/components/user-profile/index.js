"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { createProfile, updateProfile } from "@/app/redux/services/profile";
import { useAuth } from "@/assets/hooks/use-auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchProfileData } from "@/app/redux/features/profile";

export default function EditProfile({
  setShowEditComponent,
  profileData,
  isEditMode,
}) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = useAuth();

  const initialValues = {
    firstName: profileData?.profile?.firstName || "",
    lastName: profileData?.profile?.lastName || "",
    phoneNumber: profileData?.profile?.phoneNumber || "",
    gender: profileData?.profile?.gender || "",
    department: profileData?.profile?.department || "",
    jobTitle: profileData?.profile?.jobTitle || "",
    employmentType: profileData?.profile?.employmentType || "",
    employmentStatus: profileData?.profile?.employmentStatus || "",
    supervisor: profileData?.profile?.supervisor || "",
    bankAccount: profileData?.profile?.bankAccount || "",
  };

  const handleUpdate = async (formValue, helpers) => {
    try {
      setLoading(true);
      if (isEditMode) {
        await updateProfile(formValue, auth);
        helpers.resetForm();
        setLoading(false);
        toast.success("Profile updated successfully");
        dispatch(fetchProfileData(auth));
        setShowEditComponent(false);
      } else {
        await createProfile(formValue, auth);
        helpers.resetForm();
        setLoading(false);
        toast.success("Profile created successfully");
        dispatch(fetchProfileData(auth));
        setShowEditComponent(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to update profile");
    }
  };

  return (
    <section>
      <Formik initialValues={initialValues} onSubmit={handleUpdate}>
        <Form className="space-y-4 w-full">
          <div className="flex items-center justify-center gap-4">
            <div className="w-full space-y-2">
              <div>
                <label className="text-xs" htmlFor="">
                  First Name
                </label>
                <Field
                  required
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="firstName"
                  name="firstName"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Last Name
                </label>
                <Field
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="lastName"
                  name="lastName"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Phone Number
                </label>
                <Field
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="test"
                  placeholder="Phone Number"
                  name="phoneNumber"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Gender
                </label>
                <Field
                  as="select"
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="Gender"
                  name="gender"
                >
                  <option value="" disabled>
                    ---select gender---
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Field>
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Department
                </label>
                <Field
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="Department"
                  name="department"
                />
              </div>
            </div>
            <div className="w-full space-y-2">
              <div>
                <label className="text-xs" htmlFor="">
                  Job Title
                </label>
                <Field
                  required
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="jobTitle ...Accountant"
                  name="jobTitle"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Employment Type
                </label>
                <Field
                  as="select"
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="employmentType"
                  name="employmentType"
                >
                  <option value="" disabled>
                    ---employment type---
                  </option>
                  <option value="Full-time">Full Time</option>
                  <option value="Part-time">Part Time</option>
                  <option value="Contract">Contract</option>
                </Field>
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Employment Status
                </label>
                <Field
                  as="select"
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="employmentStatus"
                  name="employmentStatus"
                >
                  <option value="" disabled>
                    ---employment status---
                  </option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="On Leave">On Leave</option>
                </Field>
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Supervisor
                </label>
                <Field
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="Supervisor"
                  name="supervisor"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Bank Account
                </label>
                <Field
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="bankAccount"
                  name="bankAccount"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary rounded px-6 py-2 text-xs text-white"
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
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#1C64F2"
                  ></path>
                </svg>
              )}
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
