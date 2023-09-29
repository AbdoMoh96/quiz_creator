import React, {useState} from 'react';
import Layout from "@/Layout";
import {Card, Input, Button} from 'antd';
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addQuiz} from "@/Redux/Reducers/QuizSlice.ts";
import {Quiz, Question} from "@/Types/QuizType.ts";
import {useNavigate} from "react-router-dom";
import {nanoid} from "nanoid";

const {TextArea} = Input;

interface propTypes {
}

const QuizCreate: React.FC<propTypes> = () => {

    const initialQuestion = {
        id: '',
        text: '',
        answers: [],
        feedback_true: '',
        feedback_false: '',
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const quizId = nanoid();
    const [questions, setQuestions] = useState<Array<Question>>([]);
    const [questionData, setQuestionData] = useState<Question>(initialQuestion);

    const {
        handleSubmit,
        //formState: {errors},
        control,
    } = useForm<Quiz>();

    const onSubmit: SubmitHandler<Quiz> = (data) => {
        data.id = quizId;
        data.questions_answers = questions;
        dispatch(addQuiz(data));
        console.log(data);
        navigate('/home');
    };

    const handelAddQuestion = () => {
        setQuestions(state => [...state, {
            id: nanoid(),
            text: questionData.text,
            answers: [],
            feedback_true: questionData.feedback_true,
            feedback_false: questionData.feedback_false,
        }]);
        setQuestionData(initialQuestion);
    };

    return (
        <Layout>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem'}}>
                <Card className='quiz_create_card' title="create quiz">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Controller
                            control={control}
                            defaultValue=''
                            name="title"
                            render={({field: {onChange, value}}) => (
                                <Input value={value} onChange={onChange} style={{marginBottom: '1rem'}}
                                       placeholder="Title"/>
                            )}
                        />

                        <Controller
                            control={control}
                            defaultValue=''
                            name="url"
                            render={({field: {onChange, value}}) => (
                                <Input value={value} onChange={onChange} style={{marginBottom: '1rem'}}
                                       placeholder="Url"/>
                            )}
                        />


                        <Controller
                            control={control}
                            defaultValue=''
                            name="description"
                            render={({field: {onChange, value}}) => (
                                <TextArea
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Description"
                                    style={{marginBottom: '2rem'}}
                                    autoSize={{minRows: 3, maxRows: 5}}
                                />
                            )}
                        />


                        <hr style={{marginBottom: '1rem'}}/>

                        <div style={{
                            display: "flex",
                            gap: '1rem',
                            flexDirection: 'column',
                            border: '1px solid black',
                            borderRadius: '10px',
                            padding: '2rem',
                            marginBottom: '4rem'
                        }}>
                            <Input value={questionData.text}
                                   onChange={(event) => setQuestionData({...questionData, text: event.target.value})}
                                   style={{marginBottom: '1rem'}} placeholder="question text"/>
                            <Input value={questionData.feedback_true}
                                   onChange={(event) => setQuestionData({
                                       ...questionData,
                                       feedback_true: event.target.value
                                   })}
                                   style={{marginBottom: '1rem'}} placeholder="feedback on true"/>
                            <Input value={questionData.feedback_false}
                                   onChange={(event) => setQuestionData({
                                       ...questionData,
                                       feedback_false: event.target.value
                                   })}
                                   style={{marginBottom: '1rem'}} placeholder="feedback on false"/>
                            <Button type='primary' htmlType='button' onClick={() => handelAddQuestion()}>
                                Add Question
                            </Button>
                        </div>


                        <Button type='primary' htmlType='submit'>
                            Create Quiz
                        </Button>
                    </form>
                </Card>
            </div>
        </Layout>
    );
};

export default QuizCreate;