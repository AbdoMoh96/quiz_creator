import React from 'react';
import {Radio} from 'antd';
import {Question} from "@/Types/QuizType.ts";


interface propTypes {
    question: Question
}


const QuestionCard: React.FC<propTypes> = ({question}) => {


    return (
        <div key={question.id} className='question_card'>
            <h4>{question.text}</h4>
            <hr style={{width: '100%'}}/>
            <Radio.Group style={{display: 'flex', flexDirection: 'column'}}>
                {question.answers.map(answer => {
                    return <Radio key={answer.id} value={answer.id}>{answer.text}</Radio>;
                })}
            </Radio.Group>
        </div>
    );
};


export default QuestionCard;