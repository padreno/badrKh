import styled from "styled-components";
//import image from "../assets/nature-pic.jpeg";
export const HomePage = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image:linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.73) 17%,
      rgba(0, 0, 0, 0.66) 35%,
      rgba(0, 0, 0, 0.55) 62%,
      rgba(0, 0, 0, 0.4) 100%
    ), */
 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .homePage__bio{
    margin: auto;
    height: 50%;
      /* display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; */
   
  }
  .expandMoreicon{
    font-size: 2.2rem;
     padding-bottom: 30px;
  }
`;
