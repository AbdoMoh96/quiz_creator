import React from 'react';
import {Quiz} from "@/Types/QuizType.ts";


interface propTypes {
    quiz: Quiz
}


const Card: React.FC<propTypes> = ({quiz}) => {


    return (
        <div className='card'>
            <span>title : {quiz.title}</span>
            <span>description : {quiz.description}</span>
            <span>questions : {quiz.questions_answers.length} </span>
            <span>score : {quiz.score ?? 0} / 100 </span>
        </div>
    );
};

export default Card;