import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface AppState {
    isLoading: boolean
}

const initialState: AppState = {
    isLoading: true,
}


const appSlice = createSlice({
    name: "app",
    initialState,

    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;

        }
    }
})

export const {setLoading} = appSlice.actions;
export default appSlice.reducer;