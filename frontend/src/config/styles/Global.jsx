import { createGlobalStyle } from "styled-components";

import { fontSize, fontFamily } from "./Typography";
import { breakpoints } from ".";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after{
      padding: 0;
      margin: 0;
      box-sizing: inherit;
    }

    html{
      box-sizing: border-box;
      font-size: 62.5%;
    }

    body {
      font-size: 1.6rem;
      font-family: ${fontFamily.base};
    }

    p, button, a{
      line-height: 1.6;
      font-size: ${fontSize["sm"]};
      

      @media ${breakpoints.md}{
      font-size: ${fontSize["base"]};

      }
    }

    img{
      /* width: 100%; */
      /* height: auto; */
      max-inline-size: 100%;
      block-size: auto;
      object-fit: cover;

    }


    h1,h2,h3,h4 {
      text-wrap: balance;
      line-height: 1;
    }

    h1 {
      font-size:${fontSize["5xl"]};
     }

    h2 {
      font-size: ${fontSize["xl"]};

      @media ${breakpoints.md}{
          font-size: ${fontSize["2xl"]};
        }
     }

     h3 {
       font-size: ${fontSize["base"]};
       
       @media ${breakpoints.md}{
          font-size: ${fontSize["lg"]};
        }
     }


     a {
      text-decoration: none;
      color: currentColor;

      &:hover {
        cursor: pointer;
      }
     }

     li{
      list-style: none;
     }

     //Sweet alert
     div:where(.swal2-container) div:where(.swal2-popup){
      font-size: 1.6rem;
     }
`;

export default GlobalStyles;
