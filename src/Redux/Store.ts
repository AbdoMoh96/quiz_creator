import { configureStore } from '@reduxjs/toolkit';
import QuizReducer from "@/Redux/Reducers/QuizSlice.ts";

const Store = configureStore({
    reducer: {
        quizzes: QuizReducer
    },
    devTools: import.meta.env.DEV
});

type RootState = ReturnType<typeof Store.getState>;
type AppDispatch = typeof Store.dispatch;

export type {RootState, AppDispatch};

export default Store;





