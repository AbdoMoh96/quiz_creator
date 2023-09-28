import { createSlice } from '@reduxjs/toolkit';
import {Quiz} from "@/Types/QuizType.ts";
import quizData from "@/Data/quizData.ts";

const quizzes : Quiz[] = quizData;

interface actionType {
    payload: Quiz,
    type: string
}

export const QuizSlice = createSlice({
    name: 'todos',
    initialState: quizzes,
    reducers: {
        addQuiz: (state, action: actionType) => {
            state = [...state, action.payload];
        },
    }
    });

// this is for dispatch
export const { addQuiz } = QuizSlice.actions;

// this is for configureStore
export default QuizSlice.reducer;