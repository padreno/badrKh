import styled from "styled-components";

export const ProjectContainer = styled.section`
  background-color: #0a192f;
  color: #8892b0;
  /* line-height: 1.3; */
  /* height: 100vh; */
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
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
  .projects__cards > img {
    width: 300px;
    height: 200px;
    margin-left: 9px;
    padding-bottom: 18px;
  }
  .projects__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .projects__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-right: 30px; */
    margin: auto;
    width: 70%;
  }
  .expandMoreicon {
    align-self: center;
    font-size: 2.2rem;
    padding-top: 130px;
    padding-bottom: 20px;
    color: #fff;
  }
`;
