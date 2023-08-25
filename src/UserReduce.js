import { createSlice } from "@reduxjs/toolkit";
import { studentlist } from "./Data";

const userSlice= createSlice({
    name : 'users',
    initialState :  studentlist,
    reducers:{

    }
})
export default userSlice.reducer;