import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "@/Pages/HomePage";
import QuizPreview from "@/Pages/QuizPreview";
import QuizCreate from "@/Pages/QuizCreate";

const Router: React.FC = () => {


    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/quiz/preview/:quiz_id' element={<QuizPreview/>}/>
            <Route path='/quiz/create' element={<QuizCreate/>}/>
        </Routes>
    );
};

export default Router;