import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = token;
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`/users/signup`, userData);

      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`/users/login`, userData);

      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post(`/users/logout`);
  setAuthHeader("");
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setAuthHeader(`Bearer ${state.auth.token}`);
      const response = await axios.get(`/users/current`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      return state.auth.token !== null;
    },
  }
);
