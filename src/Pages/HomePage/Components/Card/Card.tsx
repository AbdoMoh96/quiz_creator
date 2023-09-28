import React from 'react';
import {Button} from 'antd';
import {Quiz} from "@/Types/QuizType.ts";
import {useDispatch} from "react-redux";
import {deleteQuiz} from "@/Redux/Reducers/QuizSlice.ts";


interface propTypes {
    quiz: Quiz
}


const Card: React.FC<propTypes> = ({quiz}) => {

    const dispatch = useDispatch();

    const handelQuizDelete = (quizId: number | string) => {
        dispatch(deleteQuiz(quizId));
    };


    return (
        <div className='card'>
            <span className='info_span'>title : {quiz.title}</span>
            <span className='info_span'>description : {quiz.description}</span>
            <span className='info_span'>questions : {quiz.questions_answers.length} </span>
            <span className='info_span'>score : {quiz.score ?? 0} / 100 </span>

            <div className='action_group'>
                <Button type="primary">Preview</Button>
                <Button type="primary">Edit</Button>
                <Button type="primary" danger onClick={() => handelQuizDelete(quiz.id)}>Delete</Button>
            </div>

        </div>
    );
};

export default Card;