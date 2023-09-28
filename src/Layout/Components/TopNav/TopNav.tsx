import React from 'react';
import TopNavContainer from "@/Layout/Components/TopNav/Components/TopNavContainer.tsx";


interface propTypes {
}

const TopNav: React.FC<propTypes> = () => {

    return (
        <TopNavContainer>
            <span className='app_logo'>quiz creator</span>
        </TopNavContainer>
    );
};

export default TopNav;