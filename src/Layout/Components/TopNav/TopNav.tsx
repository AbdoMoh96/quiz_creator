import React from 'react';
import {Link} from "react-router-dom";
import TopNavContainer from "@/Layout/Components/TopNav/Components/TopNavContainer.tsx";


interface propTypes {
}

const TopNav: React.FC<propTypes> = () => {

    return (
        <TopNavContainer>
            <Link className='app_logo' to='/home'>
                quiz creator
            </Link>

            <ul>
                <li>
                    <Link to='/home'>
                        home
                    </Link>
                </li>

                <li>
                    <Link to='/home'>
                        quizzes
                    </Link>
                </li>

                <li>
                    <Link to='/quiz/create'>
                        create quiz
                    </Link>
                </li>
            </ul>
        </TopNavContainer>
    );
};

export default TopNav;