import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a192f;
  color: #8892b0;
  line-height: 1.3;
  height: 100vh;
  
  .about {
    display: flex;
    flex-direction: column;
    margin: 10px 50px;
  }

  .about__container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .skills {
    display: flex;
  }
  .skills > ul > li {
    list-style: none;
    padding-bottom: 10px;
  }
 
  ul.skills-list1 > li::before {
    content: "▹";
    position: absolute;
    left: 50px;
    color: #64ffdb;
    font-size: 10px;
    line-height: 12px;
  }
  ul.skills-list2 > li::before {
    content: "▹";
    position: absolute;
    left: 240px;
    color: #64ffdb;
    font-size: 10px;
    line-height: 12px;
  }
  ul.skills-list2 > li{
     padding-left: 20px;
  }
  .about img {
    width: 300px;
    margin-top: 12px;
  }
`;
