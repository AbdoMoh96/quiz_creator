import React from 'react';
import Layout from "@/Layout";
import {Card, Input, Button} from 'antd';
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {Quiz} from "@/Types/QuizType.ts";

const {TextArea} = Input;

interface propTypes {
}

const QuizCreate: React.FC<propTypes> = () => {

    const {
        handleSubmit,
        //formState: {errors},
        control,
    } = useForm<Quiz>();

    const onSubmit: SubmitHandler<Quiz> = (data) => {
        console.log(data);
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