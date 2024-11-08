import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { Formik, Field, Form } from "formik";
import { updateLeave } from "@/app/redux/services/employees";
import toast from "react-hot-toast";
import { fetchLeaveData } from "@/app/redux/features/employees";
import { useAuth } from "@/assets/hooks/use-auth";
import { useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditLeave({ leave, handleCloseMenu }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const token = useAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleUpdateLeave = async (formValue, helpers) => {
    try {
      setLoading(true);
      await updateLeave(formValue, leave?.id, token);
      helpers.resetForm();
      setLoading(false);
      toast.success("Leave updated successfully");
      dispatch(fetchLeaveData(token));
      handleCloseModal();
      handleCloseMenu();
    } catch (error) {
      setLoading(false);
      handleCloseMenu();
      toast.error("Failed to update leave");
    }
  };

  return (
    <>
      <div className="flex justify-end">
        <p className="text-xs text-green" onClick={handleClickOpen}>
          Edit Leave
        </p>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="xs"
        fullWidth
        onClose={handleCloseModal}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Formik
            initialValues={initialValues}
            onSubmit={handleUpdateLeave}
            enableReinitialize
          >
            <Form className="space-y-4 w-full">
              <div>
                <label className="text-xs" htmlFor="">
                  Leave Type
                </label>
                <Field
                  required
                  as="select"
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="leave type"
                  name="leaveType"
                >
                  <option value="" disabled>
                    ---leave type---
                  </option>
                  <option value="Annual Leave">Annual Leave</option>
                  <option value="Medical Leave">Medical Leave</option>
                  <option value="Maternity Leave">Maternity Leave</option>
                  <option value="Academic Leave">Academic Leave</option>
                </Field>
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  From
                </label>
                <Field
                  required
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="date"
                  name="fromDate"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  To
                </label>
                <Field
                  required
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="date"
                  name="toDate"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Number of Days
                </label>
                <Field
                  required
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="No of days"
                  name="days"
                />
              </div>
              <div>
                <label className="text-xs" htmlFor="">
                  Leave Reason
                </label>
                <Field
                  required
                  as="textarea"
                  className="block border rounded text-xs border-gray py-3 px-4 focus:outline-none w-full"
                  type="text"
                  placeholder="leave reason"
                  name="reason"
                />
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
        </DialogContent>
      </Dialog>
    </>
  );
}
