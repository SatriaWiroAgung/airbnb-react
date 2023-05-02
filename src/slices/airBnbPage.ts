import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AirBnbEvent from "../models/AirBnbEvent";
import { Loadable } from "../utils/loadable";

interface AirBnbState {
  loadable: Loadable<AirBnbEvent[]>;
}

const initialState: AirBnbState = {
  loadable: { state: "not_requested" },
};

export const airBnbEventsSlice = createSlice({
  name: "airBnbEvents",
  initialState: initialState,
  reducers: {
    setLoading: (state) => {
      switch (state.loadable.state) {
        case "loaded":
        case "loading":
          state.loadable = { state: "loading", value: state.loadable.value };
          break;
        default:
          state.loadable = { state: "loading" };
          break;
      }
    },
    addElements: (state, events: PayloadAction<AirBnbEvent[]>) => {
      switch (state.loadable.state) {
        case "loading":
        case "loaded":
          state.loadable = {
            state: "loaded",
            value: [...(state.loadable.value || []), ...events.payload],
          };
          break;
        default:
          state.loadable = { state: "loaded", value: events.payload };
          break;
      }
    },
    removeElement: (state, event: PayloadAction<AirBnbEvent>) => {
      switch (state.loadable.state) {
        case "loaded":
          const index = state.loadable.value.findIndex((object) => {
            return object.id === event.payload.id;
          });
          if (index !== -1) {
            state.loadable.value.splice(index, 1);
          }
          break;
        default:
          break;
      }
    },
  },
});

export const { addElements, removeElement, setLoading } =
  airBnbEventsSlice.actions;
export default airBnbEventsSlice.reducer;
