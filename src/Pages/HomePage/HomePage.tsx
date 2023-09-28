import React from 'react';
import Layout from "@/Layout";
import CardContainer from "@/Pages/HomePage/Components/CardContaner.tsx";
import QuizSelector from "@/Redux/Selectors/QuizSelector.ts";
import Card from "@/Pages/HomePage/Components/Card/Card.tsx";

interface propTypes {
}

const HomePage: React.FC<propTypes> = () => {
    const quizzes = QuizSelector();

    return (
        <Layout>
            <CardContainer>
                {quizzes.map((quiz) => {
                    return <Card quiz={quiz}/>;
                })}
            </CardContainer>
        </Layout>
    );
};

export default HomePage;