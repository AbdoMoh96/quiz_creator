import React from 'react';

interface propTypes {
    children: JSX.Element | JSX.Element[] | undefined
}

const Layout : React.FC<propTypes> = ({children}) => {


    return (
        <div>
            <h1>layout</h1>
            {children}
        </div>
    );
};

export default Layout;