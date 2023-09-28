import React from "react";
import { BrowserRouter } from "react-router-dom";
import Web from "@/Routes/Web.tsx";

const Router : React.FC = () => {


    return(
        <BrowserRouter>
            <Web/>
        </BrowserRouter>
    );
};

export default Router;