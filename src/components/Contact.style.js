import styled from "styled-components";

export const ContactContainer = styled.section`
  background-color: #0a192f;
  color: #8892b0;
  line-height: 1.3;
  height: 100vh;
  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .contact__Container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact__Container p{
      width : 30rem;
      text-align: center;
  }
`;
