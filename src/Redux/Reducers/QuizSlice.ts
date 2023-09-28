import {createSlice} from '@reduxjs/toolkit';
import {Quiz} from "@/Types/QuizType.ts";
import quizData from "@/Data/quizData.ts";

const quizzes: Quiz[] = quizData;

interface actionType {
    payload: Quiz,
    type: string
}

export const QuizSlice = createSlice({
    name: 'todos',
    initialState: quizzes,
    reducers: {
        addQuiz: (state, action: actionType) => {
            return [...state, action.payload];
        },
        deleteQuiz: (state, action: { payload: string | number, type: string }) => {
            return state.filter(item => item.id !== action.payload);
        },
    }
});

// this is for dispatch
export const {addQuiz, deleteQuiz} = QuizSlice.actions;

// this is for configureStore
export default QuizSlice.reducer;