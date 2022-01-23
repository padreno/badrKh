import styled from "styled-components";
export const HeaderStyled = styled.header`
  color: #fff;
  font-weight: 400;
  size: 13px;
  background-color: #0a192f;
  height: 90px;

  a {
    all: unset;
    /* text-decoration: none; */
  }

  .header__Menu__List > li {
    &:hover {
      color: #64ffda;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    .hamburg__container {
      /* display: inline-block; */
      cursor: pointer;
      text-align: right;
      /* float: right; */
      padding: 40px 38px 0;
      /* height: 70px; */
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .bar1 {
      width: 40px;
      height: 2px;
      background-color: #64ffda;
      margin: 3.5px 0;
      transition: 0.4s;
    }
    .bar2 {
      width: 28px;
      height: 2px;
      text-align: right;
      background-color: #64ffda;
      margin: 3.5px 0;
      transition: 0.4s;
    }

    .bar3 {
      width: 22px;
      height: 2px;
      background-color: #64ffda;
      margin: 3.5px 0;
      transition: 0.4s;
    }
    nav.header {
      display: none;
    }

    /* nav.mobileMenu {
      Link {
        display: none;
      }
      .mobileMenu > ol {
        display: flex;
        background-color: #000;
        position: absolute;
        left: 0;
     

      }
      color:red;
    } */
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-right: 20px;
  }
  .header__Logo {
    width: 35px;
    height: 25px;
    object-fit: contain;
    margin-left: 50px;
    cursor: pointer;
  }
  .header__Menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0.9;
  }
  .header__Menu__List {
    display: flex;
    justify-content: space-between;
    flex: 1;
    list-style: none;
  }

  @media (min-width: 900px) {
    .header__Menu {
      flex: 0.9;
    }
    .header__Menu__List {
      flex: 0.8;
    }
  }
  @media (min-width: 1155px) {
    .header__Menu {
      flex: 0.8;
    }
    .header__Menu__List {
      flex: 0.7;
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
`;
