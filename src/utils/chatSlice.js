import { createSlice } from "@reduxjs/toolkit";
import { offset_live_chat } from "./constant";

const chatSlice = createSlice({
    name:'chat',
    initialState : {
        messages : [],
    },
    reducers : {
        addMessage:(state, action) => {
            state.messages.splice(offset_live_chat,1)
            state.messages.unshift(action.payload);
        },
    },
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;