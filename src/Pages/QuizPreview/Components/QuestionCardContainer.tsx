import styled from "styled-components";


const QuestionCardContainer = styled.section`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;

  .question_card {
    width: 500px;
    min-height: 100px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem 1rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    gap: 10px;

    .action_group {
      display: flex;
      gap: 1rem;
    }

    .info_span {
      font-size: 1.2rem;
      text-transform: capitalize;
    }
  }

`;


export default QuestionCardContainer;