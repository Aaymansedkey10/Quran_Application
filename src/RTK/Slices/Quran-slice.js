import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const basicUrl = "https://api.alquran.cloud/v1";
// "https://api.alquran.cloud/v1/surah/114"
// "https://api.alquran.cloud/v1/quran/ar.alafasy"

export const getAllSuarah= createAsyncThunk("quranSlice/getAllSurah", async () => {
    try {
        const response = await fetch(`https://api.quran.com/api/v4/chapters`);
        const data = await response.json();
        return data.chapters;
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
});
export const getSingleSurah = createAsyncThunk("quranSlice/getSingleSurah" , async(id)=>{
    try {
        const response = await fetch(`${basicUrl}/surah/${id}/ar.alafasy`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
});
const quranSlice = createSlice({
    name: "quranSlice",
    initialState: {
        data: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllSuarah.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllSuarah.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(getAllSuarah.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getSingleSurah.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getSingleSurah.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload;
            })
            .addCase(getSingleSurah.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            
        
    }
});

export default quranSlice.reducer;
