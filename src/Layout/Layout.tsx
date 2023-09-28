import React from 'react';
import '@/Layout/Assets/scss/index.scss';
import TopNav from "@/Layout/Components/TopNav";

interface propTypes {
    children: JSX.Element | JSX.Element[] | undefined
}

const Layout: React.FC<propTypes> = ({children}) => {


    return (
        <>
            <TopNav/>
            {children}
        </>
    );
};

export default Layout;