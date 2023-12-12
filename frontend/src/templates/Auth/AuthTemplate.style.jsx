import styled from "styled-components";
import { utils, breakpoints } from "../../config/styles";
import { FormBase } from "../../components/UI/Form";

const AuthTemplateContainer = styled.section`
  height: 100vh;
  max-height: 100dvh;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  @media ${breakpoints.md} {
    padding: 8rem 4rem;
  }

  &::before {
    content: " ";
    display: block;
    position: absolute;
    z-index: -1;
    aspect-ratio: 1 / 1;
    z-index: ${utils.z_tooltip};
    transition: ${utils.trans_5};
    background-image: linear-gradient(
      -45deg,
      ${({ theme }) => theme["secondary_main"]} 0%,
      ${({ theme }) => theme["secondary_dark"]} 100%
    );
    border-radius: 50%;
    width: 180rem;
    transform: translateX(-50%) translateY(-100%); // (A)
    top: 30%;
    left: 50%;

    @media ${breakpoints.sm} {
      transform: translateX(-62%) translateY(-100%); // (B)
    }

    @media ${breakpoints.md} {
      width: 250rem;
      transform: translateY(-69%) translateX(-100%); // (C)
    }
  }

  &.signUpMode::before {
    top: 70%;
    transform: translateX(-50%); // (A)

    @media ${breakpoints.sm} {
      transform: translateX(-62%); // (B)
    }
    @media ${breakpoints.md} {
      transform: translateY(-69%); // (C)
      top: 30%;
      left: 50%;
    }
  }
`;

const AuthTemplateGrid = styled.div`
  position: relative;
  height: 100%;
`;

const AuthTemplateSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.white};
  position: absolute;
  height: auto;
  width: 100%;

  @media ${breakpoints.sm} {
    justify-content: space-between;
  }

  @media ${breakpoints.md} {
    height: 100%;
    max-width: 50rem;
    width: 40%;
    flex-direction: column;
  }

  &.left {
    left: 0;
  }

  &.right {
    align-items: end;
    bottom: 0;
    @media ${breakpoints.md} {
      right: 0;
    }
  }
`;

const AuthTemplateSuggest = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  transition: ${utils.trans_5};
  z-index: ${utils.z_tooltip};
  /* width: 100%; */
  max-width: 35rem;

  @media ${breakpoints.sm} {
    /* width: 80%; */
  }

  @media ${breakpoints.md} {
    max-width: 55rem;
  }

  .right & {
    transform: translateY(150%); //Lo envia abajo

    @media ${breakpoints.md} {
      align-self: end;
      transform: translateX(200%); //Lo envia a la derecha
    }
  }

  .signUpMode .left & {
    transform: translateY(-150%);

    @media ${breakpoints.md} {
      transform: translateX(-200%);
    }
  }

  .signUpMode .right & {
    transform: translateX(0%);
  }
`;

const AuthTemplateImage = styled.img`
  transition: ${utils.trans_7}; // Delay extra
  z-index: ${utils.z_tooltip};
  display: none;

  @media ${breakpoints.sm} {
    display: block;
    max-width: 20rem;
  }

  @media ${breakpoints.md} {
    min-width: 45rem;
  }

  .signUpMode .left & {
    transform: translateY(-200%);

    @media ${breakpoints.md} {
      transform: translateX(-150%);
    }
  }

  .right & {
    transform: translateY(200%);

    @media ${breakpoints.md} {
      transform: translateX(200%);
    }
  }

  .signUpMode .right & {
    transform: translateX(0%);

    @media ${breakpoints.md} {
      transform: translateX(0%);
    }
  }
`;

const AuthTemplateBox = styled.div`
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translateX(-50%) translateY(-50%);
  display: grid;
  grid-template-columns: 1fr;
  z-index: ${utils.z_normal};
  transition: ${utils.trans_5};
  width: 80%;
  max-width: 35rem;

  @media ${breakpoints.md} {
    left: 75%;
    top: 50%;
  }

  .signUpMode & {
    top: 35%;

    @media ${breakpoints.md} {
      left: 25%;
      top: 50%;
    }
  }

  //Both forms will ocupy the same position
  & > ${FormBase} {
    grid-column: 1/ 2;
    grid-row: 1 / 2;
    transition: ${utils.trans_3} 0.2s;
  }

  & > ${FormBase}:nth-child(1) {
    pointer-events: all;
    opacity: 1;
  }

  & > ${FormBase}:nth-child(2) {
    pointer-events: none;
    opacity: 0;
  }

  //Hide the first form
  .signUpMode & > ${FormBase}:nth-child(1) {
    opacity: 0;
    pointer-events: none;
  }

  //Show up the second form
  .signUpMode & > ${FormBase}:nth-child(2) {
    opacity: 1;
    pointer-events: all;
  }

  & span {
    text-align: center;
    font-size: 1.2rem;

    @media ${breakpoints.md} {
      font-size: 1.4rem;
    }
  }
`;

const AuthTemplateBoxAlerts = styled.div`
  overflow-y: auto;
  max-height: 15rem;

  @media ${breakpoints.md} {
    max-height: max-content;
  }
`;

export {
  AuthTemplateContainer,
  AuthTemplateGrid,
  AuthTemplateSide,
  AuthTemplateImage,
  AuthTemplateSuggest,
  AuthTemplateBox,
  AuthTemplateBoxAlerts,
};
