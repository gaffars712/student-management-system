import { createSlice } from "@reduxjs/toolkit";
import { studentlist } from "./Data";

const userSlice= createSlice({
    name : 'users',
    initialState :  studentlist,
    reducers:{
        addStudent:(state,action)=>{
            state.push(action.payload)
        },
        updatestudent:(state,action)=>{
            const {id,name,email,age,Class,address}=action.payload;
            const updastu = state.find(user=>user.id == id)
            if(updastu){
                updastu.name=name;
                updastu.email=email;
                updastu.age=age;
                updastu.Class=Class;
                updastu.address=address;

            }

        },
        deletestudent:(state,action)=>{
            const {id}=action.payload;
            return state.filter(user=>user.id !== id);
            // if(updastu){
            //     return state.filter(f=>f.d !==id)
            // }
        }

    }
})

export const {addStudent , updatestudent,deletestudent} =  userSlice.actions
export default userSlice.reducer;