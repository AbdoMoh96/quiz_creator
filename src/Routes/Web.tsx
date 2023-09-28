import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "@/Pages/HomePage";
import QuizPreview from "@/Pages/QuizPreview";

const Router: React.FC = () => {


    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/quiz/preview/:quiz_id' element={<QuizPreview/>}/>
        </Routes>
    );
};

export default Router;