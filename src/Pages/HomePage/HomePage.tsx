import React from 'react';
import Layout from "@/Layout";
// import QuizSelector from "@/Redux/Selectors/QuizSelector.ts";

interface propTypes {}

const HomePage : React.FC<propTypes> = () => {
    //const quizzes = QuizSelector();

    /*{quizzes.map((quiz) => {
                return <h1>{quiz.title}</h1>;
            })}*/

    return (
        <Layout>
          <h4>Home Page</h4>
        </Layout>
    );
};

export default HomePage;