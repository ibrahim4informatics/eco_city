import { getRandomTrash } from "@/utils/gameConstants";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";



type TrashType = {
    id: number,
    src: string,
    name: string,
    type: string
}

interface gameSlice {
    score: number,
    lives: number,
    shownTrash: TrashType[],
    showCorrectFeedback: boolean,
    showWrongFeedback: boolean,
}





const initialState: gameSlice = {
    score: 0,
    lives: 3,
    shownTrash: getRandomTrash(1),
    showCorrectFeedback: false,
    showWrongFeedback: false
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {

        reset: (state) => {
            state.lives = 3;
            state.score = 0;
            state.shownTrash = getRandomTrash(1)
        },

        incrementScore: (state, { payload }: PayloadAction<number>) => {
            state.score = state.score + payload
        },

        decrementScore: (state, { payload }: PayloadAction<number>) => {
            state.score = state.score - payload
        },


        decrementLives: (state) => {
            state.lives = state.lives - 1
        },

        changeTrash: (state, { payload }: PayloadAction<number>) => {
            state.shownTrash = state.shownTrash.filter(trash => trash.id !== payload)
            state.shownTrash = state.shownTrash.concat(getRandomTrash(1));
        },

        setShowCorrectFeedback: (state, { payload }: PayloadAction<boolean>) => {
            state.showCorrectFeedback = payload
        },
        setShowWrongFeedback: (state, { payload }: PayloadAction<boolean>) => {
            state.showWrongFeedback = payload
        }

    }
})


export default gameSlice.reducer;
export const { reset, decrementLives, decrementScore, incrementScore, changeTrash, setShowCorrectFeedback, setShowWrongFeedback } = gameSlice.actions;