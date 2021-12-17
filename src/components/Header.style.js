import styled from "styled-components";

export const HeaderStyled = styled.header`
  color: #fff;
  /* background: #000; */
  height: 60px;
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__Logo{
    width: 35px;
    height: 25px;
    object-fit: contain;
    margin-left: 30px;
  }
  .header__Menu{
    display: flex;
    /* justify-content: space-between; */
    flex: 0.5;
    list-style: none;
    justify-content: space-around;
  }
  .header__Menu > li{
    /* padding-left: 10px; */
   
  }
  
`;
