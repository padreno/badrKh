import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a192f;
  color: #fff;
  height: 100vh;

  .about {
    display: flex;
    flex-direction: column;
  }
  .about__Me > ul > li {
    list-style: none;
  }
  .about__container {
     display: flex;
    /* display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px; */
    justify-content: space-between;
    align-items: flex-start; 
  }
  .skills-list li {
    /* position: relative; */
    /* margin-bottom: 10 px; */
    /* padding-left: 10 px; */
    /* font-family: 100;
    font-size: 0.9rem; */
  }
  ul.skills-list li::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: #64ffdb;
    font-size: 10px;
    line-height: 12px;
  }
  .about img {
    width: 300px;
    margin-top: 12px;
  }
`;
