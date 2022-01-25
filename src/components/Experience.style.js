import styled from "styled-components";

export const ExperienceContainer = styled.section`
  background-color: #0a192f;
  color: #8892b0;
  line-height: 1.3;
  /* height: 100vh; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    /* padding: 50px 40px 30px; */
    padding-left: 48px;
    margin-left: 40px;
    display: flex;
    align-items: center;
  }
  .experience__Container {
    width: 87%;
    padding-right: 30px;
    margin-left: 40px;
  }
  h1:after {
    content: "";
    flex: 0.5;
    margin-left: 1rem;
    height: 1.5px;
    background-color: #233554;
  }
  p {
    padding-left: 40px;
    line-height: 1.4;
  }
  .tech__Icons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    padding-left: 48px;
  }
  img {
    width: 50px;
    height: 70px;
    padding: 20px;
    filter: gray;
    -webkit-filter: grayscale(1);
    transition: all 0.5s ease-in-out;
    &:hover {
      filter: none;
      -webkit-filter: grayscale(0);
      transform: scale(1.01);
    }
  }
  .tech__Icons__line1 {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  .expandMoreicon {
    align-self: center;
    font-size: 2.2rem;
    padding-top: 130px;
    padding-bottom: 20px;
    color: #fff;
  }
  @media (max-width: 600px) {
    img {
      filter: none;
      width: 35px;
      height: 55px;
    }
    .tech__Icons__line1 {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
    }

    h2 {
      padding-left: 0;
    }
    p {
      padding-left: 0;
    }
  }
`;
