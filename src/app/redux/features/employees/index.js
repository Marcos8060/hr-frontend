import { createSlice } from "@reduxjs/toolkit";
import { fetchProfile } from '../../services/profile'
import { fetchLeave } from "../../services/employees";


const initialState = {
  leave: [],
};

const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setLeave: (state, action) => {
      state.leave = action.payload;
    },
    
  },
});

export const {
  setLeave,
} = EmployeeSlice.actions;


export const fetchLeaveData = (auth) => async (dispatch) => {
    
    try {
      const data = await fetchLeave(auth);
      dispatch(setLeave(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };





export default EmployeeSlice.reducer;
