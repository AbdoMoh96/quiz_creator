import * as yup from 'yup';

const answerSchema = yup.object({
    id: yup.lazy(value =>
        typeof value === 'string'
            ? yup.string().required()
            : yup.number().required()
    ),
    is_true: yup.boolean().required(),
    text: yup.string().required(),
});


const questionSchema = yup.object({
    id: yup.lazy(value =>
        typeof value === 'string'
            ? yup.string().required()
            : yup.number().required()
    ),
    text: yup.string().required(),
    feedback_false: yup.string().required(),
    feedback_true: yup.string().required(),
    answer_id: yup.mixed().nullable(),
    answers: yup.array(answerSchema).required(),
});


const quizSchema = yup.object({
    id: yup.lazy(value =>
        typeof value === 'string'
            ? yup.string().required()
            : yup.number().required()
    ),
    title: yup.string(),
    description: yup.string(),
    score: yup.number().nullable(),
    modified: yup.string(),
    url: yup.string(),
    questions_answers: yup.array(questionSchema).required(),
    created: yup.string().nullable(),
});

// Export Yup schemas as types
export type Answer = yup.InferType<typeof answerSchema>;
export type Question = yup.InferType<typeof questionSchema>;
export type Quiz = yup.InferType<typeof quizSchema>;