import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        trendingMovies : null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideo:null,
        clickTrailerVideo:null
    },
    reducers:{
        addTrendingMovies: (state, action) =>{
            state.trendingMovies = action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo: (state,action) =>{
            state.trailerVideo = action.payload;
        },
        addClickTrailerVideo: (state,action) =>{
            state.clickTrailerVideo = action.payload;
        }
    },
});

export const {addTrendingMovies, addTrailerVideo,addClickTrailerVideo, addPopularMovies, addTopRatedMovies,addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;