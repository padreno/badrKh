import styled from "styled-components";

export const ContactContainer = styled.section`
  background-color: #0a192f;
  color: #8892b0;
  line-height: 1.3;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .contact__Container {
    display: flex;
    flex: 0.7;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .contact__Container > p {
    font-size: 1.4rem;
    text-align: center;
  }
  h3 {
    color: #64ffda;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    color: #64ffda;
    border: 1px solid #64ffda;
    padding: 0.9rem 1.4rem;
    border-radius: 4px;
    cursor: pointer;
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icons__container > ul {
    list-style-type: none;
    display: flex;
  }
  .design__Credit {
    text-align: center;
  }
  .icons__container > ul > li > a {
    border: none;
  }
  @media (max-width: 566px) {
    .contact__Container > p {
      font-size: 1rem;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;
