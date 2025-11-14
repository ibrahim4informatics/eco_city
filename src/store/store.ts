import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import gameReducer from "./slices/gameSlice"
export const store = configureStore(
    {
        reducer: {
            app: appReducer,
            game:gameReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;