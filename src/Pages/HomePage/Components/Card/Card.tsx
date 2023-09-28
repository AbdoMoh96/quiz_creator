import React from 'react';
import {Button} from 'antd';
import {Quiz} from "@/Types/QuizType.ts";


interface propTypes {
    quiz: Quiz
}


const Card: React.FC<propTypes> = ({quiz}) => {


    return (
        <div className='card'>
            <span className='info_span'>title : {quiz.title}</span>
            <span className='info_span'>description : {quiz.description}</span>
            <span className='info_span'>questions : {quiz.questions_answers.length} </span>
            <span className='info_span'>score : {quiz.score ?? 0} / 100 </span>

            <div className='action_group'>
                <Button type="primary">Preview</Button>
                <Button type="primary">Edit</Button>
                <Button type="primary" danger>Delete</Button>
            </div>

        </div>
    );
};

export default Card;