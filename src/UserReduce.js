import { createSlice } from "@reduxjs/toolkit";
import { studentlist } from "./Data";

const userSlice= createSlice({
    name : 'users',
    initialState :  studentlist,
    reducers:{
        addStudent:(state,action)=>{
            state.push(action.payload)
        }

    }
})

export const {addStudent} =  userSlice.actions
export default userSlice.reducer;