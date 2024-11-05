import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users: [],
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    
  },
});

export const {
  setUsers,
} = UserSlice.actions;






export default UserSlice.reducer;
