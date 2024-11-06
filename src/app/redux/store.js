import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users'
import profileReducer from './features/profile'



export const store = configureStore({
    reducer:{
        users: userReducer,
        profile: profileReducer,
    }
})