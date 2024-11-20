import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { saveData } from "~utils";

export interface CounterState {
  count: number;
}

export const getUserNodes = createAsyncThunk(
  "user/getUserNodes", // Rename appropriately
  async ({ rejectWithValue }) => {
    try {
      return [];
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "An error occurred",
      );
    }
  },
);
// const [_, setAddress] = useStorage<string>("address", (storedAddress) => storedAddress || "");
// const [__, setNodeid] = useStorage<string>("nodeid", (storedNodeid) => storedNodeid || "");

const initState = {
  address: "",
  nodeId: "",
  userNodes: [],
  currentNode: {},
  currentNodeStatus: false,
  currentCredit: 0,
  miningInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      state.address = action.payload.newAddress;
      // setAddress(action.payload.newAddress)
    },
    connect: (state, action) => {
      state.nodeId = action.payload.nodeAddress;
      // setNodeid(action.payload.nodeAddress)
    },
    disconnect: (state) => {
      state.currentNode = {};
    },
    switchNode: (state, action) => {
      let { currentNode, currentNodeStatus } = action.payload;
      state.currentNode = currentNode;
      state.currentNodeStatus = currentNodeStatus;
    },
    updateCurrentCredit: (state, action) => {
      console.log("Current credit updated:", action.payload.newCredit);
      state.currentCredit = action.payload.newCredit;
    },
    updateMiningInfo: (state, action) => {
      let { miningInfo = {} } = action.payload;
      console.log("slice miningInfo from background:", miningInfo);

      state.miningInfo = miningInfo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserNodes.fulfilled, (state, action) => {
      console.log("Nodes updated:", action.payload);
      state.userNodes = action.payload;
    });
  },
});

export const {
  login,
  connect,
  disconnect,
  switchNode,
  updateCurrentCredit,
  updateMiningInfo,
} = userSlice.actions;

export default userSlice.reducer;
