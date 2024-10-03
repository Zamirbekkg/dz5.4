import { createAction, createReducer } from "@reduxjs/toolkit";

const LEASE_NUM = 'LEASE_NUM';
const LEASON_NUM = 'LEASON_NUM';


export const leasenum = createAction( LEASE_NUM );
export const leasonnum = createAction( LEASON_NUM );

const initialState  = {
    num: 0 
}



export default createReducer(  initialState, (builder)=> {
    builder
    .addCase(leasenum, (state, action)=>{
        if(state.num < 15) {
            state.num += 5;
        }
    })
    .addCase(leasonnum, (state, action) => {
        if (state.num > 0) {
            state.num -= 5;
        }
    })
    
});    