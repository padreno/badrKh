import styled from "styled-components";

export const ProjectContainer = styled.section`
  background-color: #0a192f;
  color: #8892b0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    padding-left: 48px;
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  h1:after {
    content: "";
    flex: 0.5;
    margin-left: 1rem;
    height: 1.5px;
    background-color: #233554;
  }

  .projects__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .card > a > img {
    width: 270px;
    height: 180px;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 270px;
  }
  .card__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .projects__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 70%;
  }
  .card__container > h4 {
    margin: 0;
  }
  .expandMoreicon {
    align-self: center;
    font-size: 2.2rem;
    padding-top: 130px;
    padding-bottom: 20px;
    color: #fff;
  }
`;
