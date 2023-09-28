import styled from "styled-components";


const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-auto-rows: 200px;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  justify-content: center;
  padding-top: 5rem;

  .card {
    height: 100%;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    span {
      font-size: 1.2rem;
      text-transform: capitalize;
    }
  }
`;


export default CardContainer;