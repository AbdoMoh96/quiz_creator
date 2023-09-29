import React, {useState} from 'react';
import Layout from "@/Layout";
import {Card, Input, Button, List, Modal, Switch} from 'antd';
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addQuiz} from "@/Redux/Reducers/QuizSlice.ts";
import {Quiz, Question, Answer} from "@/Types/QuizType.ts";
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

    const initialAnswer = {
        questionId: '',
        answer: {
            id: '',
            is_true: false,
            text: '',
        }
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const quizId = nanoid();
    const [questions, setQuestions] = useState<Array<Question>>([]);
    const [questionData, setQuestionData] = useState<Question>(initialQuestion);
    const [answerData, setAnswerData] = useState<{ questionId: string | number, answer: Answer }>(initialAnswer);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handelOpenModal = (questionId: string | number) => {
        setAnswerData({...answerData, questionId: questionId});
        setIsModalOpen(true);
    };

    const handelCloseModal = () => {
        setAnswerData({...answerData, questionId: ''});
        setIsModalOpen(false);
    };

    const handelAddAnswers = () => {
        const questionIndex = questions.findIndex((question) => question.id === answerData.questionId);
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex] = {
            ...updatedQuestions[questionIndex],
            answers: [...updatedQuestions[questionIndex].answers, {
                id: nanoid(),
                is_true: answerData.answer.is_true,
                text: answerData.answer.text
            }],
        };
        setQuestions(updatedQuestions);
        setAnswerData(initialAnswer);
        setIsModalOpen(false);
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
                            border: '1px solid #bfbfbf',
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

                        <List
                            size="small"
                            style={{marginBottom: '4rem'}}
                            header={<div>Questions</div>}
                            bordered
                            dataSource={questions}
                            renderItem={(item) => <List.Item style={{display: 'block', marginBottom: '2rem'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                    {item.text}
                                    <Button type='primary'
                                            onClick={() => handelOpenModal(item.id)}
                                            htmlType='button'
                                            style={{marginBottom: '0.5rem'}}>
                                        Add Answer
                                    </Button>
                                </div>
                                <List
                                    size="small"
                                    bordered
                                    header={<div>Answers</div>}
                                    dataSource={item.answers}
                                    renderItem={(item) => <List.Item>{item.text}</List.Item>}
                                />
                            </List.Item>
                            }
                        />

                        <Modal title="Answer Create" open={isModalOpen} onOk={() => handelAddAnswers()}
                               onCancel={() => handelCloseModal()}>
                            <Input
                                value={answerData.answer.text}
                                onChange={(event) =>
                                    setAnswerData({
                                        ...answerData,
                                        answer: {
                                            ...answerData.answer,
                                            text: event.target.value,
                                        },
                                    })
                                }
                                style={{marginBottom: '1rem'}}
                                placeholder="answer text"
                            />

                            <div>
                                <span>is this the correct answer ?</span> <br/>
                                <Switch onChange={(value) =>
                                    setAnswerData({
                                        ...answerData,
                                        answer: {
                                            ...answerData.answer,
                                            is_true: value,
                                        },
                                    })
                                }/>
                            </div>
                        </Modal>


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