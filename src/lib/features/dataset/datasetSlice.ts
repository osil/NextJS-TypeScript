import { createSlice, createAsyncThunk, Action } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define a type for the slice state
interface DatasetState {
  dataSets: any;
  currentDataSet: any;
  loading: boolean;
  error: string;
}

// Define the initial state using that type
const initialState: DatasetState = {
  dataSets: [],
  currentDataSet: null,
  loading: true,
  error: "",
};

interface RejectedAction extends Action {
  error: Error;
}

function isRejectedAction(action: Action): action is RejectedAction {
  return action.type.endsWith("rejected");
}

export const fetchDataset = createAsyncThunk(
  "dataset/fetchDataset",
  async () => {
    const response = await axios.get("api/dataset");
    return response.data;
  }
);

const datasetSlice = createSlice({
  name: "dataset",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          if (action.type.includes("fetchDataset")) {
            state.dataSets = action.payload;
          }
        }
      )
      .addMatcher(
        isRejectedAction,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default datasetSlice.reducer;
