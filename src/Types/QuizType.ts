interface Answer {
    id: number | string;
    is_true: boolean;
    text: string;
}

interface Question {
    id: number | string;
    text: string;
    feedback_false: string;
    feedback_true: string;
    answer_id: null | number;
    answers: Answer[];
}

interface Quiz {
    id: number | string;
    title: string;
    description: string;
    score: null | number;
    modified: string;
    url: string;
    questions_answers: Question[];
    created: string;
}


export type {Quiz, Answer, Question};