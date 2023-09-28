import styled from "styled-components";


const TopNavContainer = styled.nav`
  height: 4rem;
  background-color: #dedede;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .app_logo {
    padding: 0 1rem;
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: capitalize;
  }

  ul {
    height: 100%;
    display: flex;
    list-style: none;
    padding: 0 2rem;
    gap: 2rem;

    li {
      height: 100%;
      position: relative;

      &:hover {
        &:after {
          width: 100%;
        }
      }

      &:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 0;
        transition: width 0.6s ease-in-out;
        background-color: black;
      }

      /*&:hover {
        border-bottom: 2px solid black;
      }*/

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
        font-size: 1.2rem;
        text-decoration: none;
        text-transform: capitalize;
        color: black;
      }
    }
  }

`;


export default TopNavContainer;