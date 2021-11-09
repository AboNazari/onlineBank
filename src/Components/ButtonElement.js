import styled from "styled-components";
import {Link} from 'react-scroll';

export const Button = styled(Link)`
font-size: ${({bigfont})=> (bigfont ? "20px" : "16px")};
background: ${({primary})=> (primary? "#01BF71": "#010606")};
color: ${({dark})=> (dark ? "#010606" : "#fff")};;
padding: ${({big})=> (big ? "14px 48px" : "12px 30px")};
border-radius: 50px;
outline: none;
white-space: nowrap;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: 0.2s all ease-in-out;
:hover{
  background: ${({primary})=> (primary? "#fff": "#01BF71" )};
 transition: 0.2s all ease-in-out;
}
`