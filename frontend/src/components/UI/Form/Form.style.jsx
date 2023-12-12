import styled, { css } from "styled-components";
import { Form } from "react-router-dom";
import { fontSize, fontWeight } from "../../../config/styles/Typography";
import { utils } from "../../../config/styles";

const CUSTOM_PROPS = ["rounded", "cols"];

const FormHeader = styled.h2`
  color: ${({ theme }) => theme["gray_black"]};
  font-size: ${fontSize["4xl"]};
`;

const FormBase = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 35rem;
`;

const FormFieldGrid = styled.div
  .withConfig({
    shouldForwardProp: (prop) => !CUSTOM_PROPS.includes(prop),
  })
  .attrs((props) => ({
    cols: props.cols || 1,
  }))`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  gap: 1.5rem;
  align-self: stretch;
`;

const FormInputBase = styled.input
  .withConfig({
    shouldForwardProp: (prop) => !CUSTOM_PROPS.includes(prop),
  })
  .attrs({
    autoComplete: "on",
  })`
  background-color: ${({ theme }) => theme["gray_lighten"]};
  border: none;
  outline: none;
  padding: 1.2rem 2rem;
  width: 100%;
  

  &::placeholder {
    color: ${({ theme }) => theme["gray_medium"]};
    font-weight: ${fontWeight.semibold};
  }

  ${(props) =>
    props.rounded === "md" &&
    css`
      border-radius: ${utils.rounded_md};
    `}


`;

const FormTextArea = styled(FormInputBase).attrs({ as: "textarea" })`
  resize: vertical;
`;

const FormWrapperInputBase = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & :is(svg, i) {
    position: absolute;
    left: 1.8rem;
    color: ${({ theme }) => theme["gray_medium"]};
  }

  & :is(svg, i) + ${FormInputBase} {
    padding-left: 5rem;
  }
`;

const FormBox = styled.div``;

export {
  FormHeader,
  FormBase,
  FormInputBase,
  FormFieldGrid,
  FormBox,
  FormWrapperInputBase,
  FormTextArea,
};
