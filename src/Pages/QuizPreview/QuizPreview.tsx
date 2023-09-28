import React, {useEffect, useState} from 'react';
import Layout from "@/Layout";
import {useParams} from "react-router-dom";
import quizSelector from "@/Redux/Selectors/QuizSelector.ts";
import {Quiz} from "@/Types/QuizType.ts";
import QuestionCard from "@/Pages/QuizPreview/Components/QuestionCard";
import QuestionCardContainer from "@/Pages/QuizPreview/Components/QuestionCardContainer.tsx";


interface propTypes {
}


const QuizPreview: React.FC<propTypes> = () => {
    const params = useParams();
    const quizzes = quizSelector();
    const [quiz, setQuiz] = useState<Quiz>();

    useEffect(() => {
        const quiz = quizzes.find(quiz => quiz.id == params.quiz_id);
        setQuiz(quiz);
    }, []);

    return (
        <Layout>
            <div style={{padding: '2rem'}}>
                <h1>quiz title :: {quiz?.title}</h1>
                <h2>quiz description :: {quiz?.description}</h2>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <iframe width="560" height="315" src={quiz?.url}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>

                </iframe>
            </div>

            <QuestionCardContainer>
                {quiz?.questions_answers.map(question => {
                    return <QuestionCard key={question.id} question={question}/>;
                })}
            </QuestionCardContainer>
        </Layout>
    );
};


export default QuizPreview;