import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AirBnbEvent from "../models/AirBnbEvent";

const initialState = {
    values : [] as AirBnbEvent[]
};

export const airBnbEventsSlice = createSlice({
    name: 'airBnbEvents',
    initialState: initialState,
    reducers: {
        addElements: (state, events: PayloadAction<AirBnbEvent[]>) => {
            state.values = [...state.values, ...events.payload]
        },
        removeElement: (state, event: PayloadAction<AirBnbEvent>) => {
            const index = state.values.findIndex ((object) => {
                return object.id === event.payload.id;
            })
            if (index !== -1) {
                state.values.splice(index, 1);
            }
        }
    },
});

export const { addElements, removeElement} = airBnbEventsSlice.actions;
export default airBnbEventsSlice.reducer;