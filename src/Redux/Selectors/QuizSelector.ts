import {useSelector} from "react-redux";
import {RootState} from "@/Redux/Store.ts";

const QuizSelector = () => {
    return useSelector((state: RootState) => state.quizzes);
};

export default QuizSelector;