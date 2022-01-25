import styled from "styled-components";

export const HeroSection = styled.div`
  height: 100vh;
  background-color: #0a192f;

  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.toggleIsActive {
    filter: blur(5px);
  }

  .homePage__bio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding-top: 120px; */
    width: 77%;
    height: 100%;
    /* align-items: center; */
  }
  h1 {
    color: #64ffda;
    font-weight: 400;
    font-size: 16px;
  }
  h2 {
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 600;
    line-height: 1.8;
    color: #ccd6f6;
    margin: 0;
  }
  h3 {
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 600;
    line-height: 1.2;
    color: #8892b0;
    margin: 0;
  }

  .homePage__bio {
  }
  .homePage__bio > p {
    width: 90%;
    color: #848eac;
    line-height: 1.5;
  }
  .expandMoreicon {
    align-self: center;
    font-size: 2.2rem;
    /* padding-top: 130px; */
    /* padding-bottom: 20px; */
    color: #fff;
  }
`;
