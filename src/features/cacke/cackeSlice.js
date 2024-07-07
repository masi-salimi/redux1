import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCackes: 10,
};
// export default function cackeReducer(state = initialState, action) {
//   switch (action.type) {
//     case BUY_CAKE: {
//       return {
//         ...state,
//         numOfCackes: state.numOfCackes - action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// }

const cackeSlice = createSlice({
  name: "cacke",
  initialState,
  reducers: {
    //  buy_Cacke:function{}
    // buyCacke(){}
    buyCacke: (state, action) => {
      state.numOfCackes = state.numOfCackes - action.payload;
      //immerjs =>allow us to mutate state
    },
    
  },
});

export const { buyCacke } = cackeSlice.actions;
export default cackeSlice.reducer;
