import styled from "styled-components";
export const HeaderStyled = styled.header`
  height: 65px;
  border: 3px solid #fff;
  margin-bottom: 20px;
  max-width: 1200px;
  margin: 0 auto;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0a192f;
    transition-timing-function: ease-in;
    transition: 0.8s;
  }

  .header__Logo {
    width: 45px;
    height: 60px;
    margin: 0 auto;
    z-index: 1;
    cursor: pointer;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    padding: 19px 32px;
  }
  .hamburger {
    display: block;
    position: relative;
    z-index: 1;
    user-select: none;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
  .hamburger span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background-color: #64ffda;
    border-radius: 6px;
    z-index: 1;
    transform-origin: 0 0;
    transition: 0.4s;
  }
  .hamburger:hover span:nth-child(2) {
    transform: translateX(10px);
    background-color: #fff;
  }
  .hamburger:hover span:nth-child(3) {
    transform: translateX(17px);
    background-color: #fff;
  }

  .hamburger.is-active span:nth-child(1) {
    transform: translate(0px, -2px) rotate(45deg);
  }
  .hamburger.is-active span:nth-child(2) {
    opacity: 0;
    transform: translateX(15px);
  }
  .hamburger.is-active span:nth-child(3) {
    transform: translate(-3px, 3px) rotate(-45deg);
  }

  .header__Menu {
    display: none;
    flex: 1 1 0%;
    justify-content: flex-end;
    margin: 0 -20px;
  }
  .header__Menu li {
    list-style: none;
    margin: 0 17px;
  }
  .header__Menu a {
    text-decoration: none;
    color: #fff;
    transition: 0.4s;
    &:hover {
      color: #64ffda;
    }
  }

  li::before {
    content: "0" counter(li) ".";
    color: #64ffda;
    display: inline-block;
    width: 1.7em;
    margin-left: -1em;
  }
  li {
    counter-increment: li;
  }

  .resume__button {
    background: transparent;
    line-height: 10px;
    border: 1px solid #64ffda;
    border-radius: 3.4px;
    color: #64ffda;
    text-align: center;
    width: 80px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 12px !important;
    font-size: 14px;
    &:hover {
      background: rgb(100, 255, 218, 0.1);
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }
    .header__Menu {
      display: flex;

      align-items: center;
    }
    .header__Menu > ol {
      display: flex;
    }
    nav {
      background-color: transparent;
    }
  }
  @media (max-width: 768px) {
    .hamburger.is-active.header__Menu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: #64ffda;
      background-color: #0a192f;

      opacity: 0.999;
      position: fixed;
      right: 0;
      top: 0;
      width: 60%;
      height: 100%;
    }
    .headerMenu__List {
      display: flex;
      flex: 0.6;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
`;
