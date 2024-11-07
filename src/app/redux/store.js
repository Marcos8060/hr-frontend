import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/index'
import profileReducer from './features/profile'
import employeeReducer from './features/employees'



export const store = configureStore({
    reducer:{
        users: userReducer,
        profile: profileReducer,
        employee: employeeReducer,
    }
})