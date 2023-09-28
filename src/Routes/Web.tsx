import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/Pages/HomePage";

const Router : React.FC = () => {


    return(
        <Routes>
            <Route path='/' element={<Navigate to='/home' />}/>
            <Route path='/home' element={<HomePage/>}/>
        </Routes>
    );
};

export default Router;