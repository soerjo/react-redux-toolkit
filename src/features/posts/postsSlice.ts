import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IInitailState } from "./posts.interface";
import axios from "axios";
import { RootState } from "../store";

const url = "https://jsonplaceholder.typicode.com";

const initialState: IInitailState = {
  posts: [],
  status: "idle",
  error: null,
};

export const getPostsAsync = createAsyncThunk(
  "posts/fetchData",
  async ({ limit = 5 }: { limit?: number }) => {
    const getUrl = url + "/posts?_start=" + 0 + "&_limit=" + limit;
    console.log(getUrl);

    try {
      const response = await axios.get(getUrl);
      return response.data;
    } catch (error: any) {
      console.log(error.message);
      return error.message;
    }
  }
);

export const addPostsAsync = createAsyncThunk(
  "posts/fetchData",
  async ({ limit = 5, start }: { limit?: number; start: number }) => {
    const getUrl = url + "/posts?_start=" + start + "&_limit=" + limit;
    console.log(getUrl);

    try {
      const response = await axios.get(getUrl);
      return response.data;
    } catch (error: any) {
      console.log(error.message);
      return error.message;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getPostsAsync.pending, state => {
        state.status = "loading";
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(getPostsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
  reducers: {},
});

export const initPosts = (state: RootState) => state.posts.posts;
export const getPostErr = (state: RootState) => state.posts.error;
export const getPostStatus = (state: RootState) => state.posts.status;

export default postsSlice.reducer;
