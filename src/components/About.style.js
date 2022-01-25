import styled from "styled-components";

export const Container = styled.section`
  background-color: #0a192f;
  color: #8892b0;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .about h1 {
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
  .about {
    display: flex;
    flex-direction: column;
  }

  .about__container {
    display: flex;
    align-items: center;
    padding-right: 30px;
    margin-left: 40px;
    width: 87%;
    @media (max-width: 769px) {
      flex-direction: column;
    }
  }

  .about__Me {
    display: flex;
    flex-direction: column;
    padding: 40px;
  }
  p {
    line-height: 1.3rem;
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
    color: #64ffda;
    padding-right: 20px;
    font-size: 15px;
  }
  ul.skills-list2 > li::before {
    content: "▹";
    color: #64ffda;
    padding-right: 20px;
    font-size: 15px;
  }
  .about img {
    width: 300px;
    margin-top: 12px;

    filter: gray;
    -webkit-filter: grayscale(1);
    transition: all 0.5s ease-in-out;
    &:hover {
      filter: none;
      -webkit-filter: grayscale(0);
      transform: scale(1.01);
    }

    outline: 4px solid #64ffda;
    outline-offset: 15px;
    transform: translateY(9px) translateX(9px);
  }

  .expandMoreicon {
    align-self: center;
    font-size: 2.2rem;
    padding-top: 130px;
    padding-bottom: 20px;
    color: #fff;
  }

  @media screen and (max-width: 600px) {
    .about__container {
      margin-left: auto;
      margin-right: auto;
      padding-right: 0;
    }
    .skills {
      margin-left: -20px;
    }
    .about img {
      width: 200px;
      filter: none;
    }
  }
`;
