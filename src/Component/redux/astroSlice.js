import { createSlice } from "@reduxjs/toolkit";

var initialState={
    Astrologers:[]
}


export const AstroSlice=createSlice({
    name:"Astrology",
    initialState,
    reducers:{
        addBulk:(state,action)=>{
           state.Astrologers=[...action.payload]
        },
        addAstro:(state,action)=>{
            state.Astrologers.push(action.payload);     
        },
        removeAstro:(state,action)=>{
        state.Astrologers=state.Astrologers.filter((astro)=>astro._id!==action.payload);
        },
        updateAstro:(state,action)=>{
        state.Astrologers = state.Astrologers.map((astro) =>
            astro._id === action.payload._id ? action.payload : astro
          );
        }
    }
})

export const {addAstro,removeAstro,addBulk,updateAstro}=AstroSlice.actions
export default AstroSlice.reducer;