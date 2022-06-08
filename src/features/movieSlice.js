import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newDisney: null,
  recommend: null,
  original: null,
  trending: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
      state.newDisney = action.payload.newDisney;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectTrending = (state) => state.movie.trending;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;

export default movieSlice.reducer;
