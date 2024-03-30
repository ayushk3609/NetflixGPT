import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState: {
        showGPTSearch : false,
        searchResults: null,
        movieNames: null
    },
    reducers: {
        toggleGPTSearchView : (state,action) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGeminiMovieResult: (state,action) => {
            const {movieNames,searchResults} = action.payload
            state.movieNames = movieNames;
            state.searchResults = searchResults;
        }
    }

});

export const {toggleGPTSearchView,addGeminiMovieResult} = gptSlice.actions;

export default gptSlice.reducer;