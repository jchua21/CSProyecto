import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { fontWeight } from "../../../config/styles/Typography";
import { breakpoints, utils } from "../../../config/styles";

const VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TRANSPARENT: "transparent",
  DANGER: "danger",
  WARNING: "warning",
};

const CUSTOM_PROPS = ["rounded", "variant"];

const ButtonBase = styled(Link)
  .withConfig({
    shouldForwardProp: (prop) => !CUSTOM_PROPS.includes(prop),
  })
  .attrs((props) => ({
    variant: props.variant || VARIANTS["PRIMARY"],
  }))`
  display: inline-block;
  border: none;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: ${fontWeight.semibold};
  padding: 1.5rem 3.5rem;
  transition: background 0.3s ease-in-out;
  width: 100%;
  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
    opacity:.7;
  }

  @media ${breakpoints.md} {
    width: auto;
    padding-inline: 4.5rem;
  }

  ${(props) =>
    props.rounded === "md" &&
    css`
      border-radius: ${utils.rounded_md};
    `}

  ${(props) =>
    props.variant == VARIANTS.PRIMARY &&
    css`
      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme["primary_main"]};

      &:hover {
        background-color: ${({ theme }) => theme["primary_dark"]};
      }
    `}

    ${(props) =>
      props.variant == VARIANTS.SECONDARY &&
      css`
        color: ${({ theme }) => theme["primary_dark"]};
        background: ${({ theme }) => theme["white"]};

        &:hover {
          background: ${({ theme }) => theme["primary_dark"]};
          color: ${({ theme }) => theme["white"]};
        }
      `}

      
    ${(props) =>
      props.variant == VARIANTS.DANGER &&
      css`
        color: ${({ theme }) => theme["white"]};
        background: #d62626;

        &:hover {
          background: #991b1b;
          color: ${({ theme }) => theme["white"]};
        }
      `}

    ${(props) =>
      props.variant == VARIANTS.WARNING &&
      css`
        color: ${({ theme }) => theme["white"]};
        background: #2563eb;

        &:hover {
          background: #1e40af;
          color: ${({ theme }) => theme["white"]};
        }
      `}


  ${(props) =>
    props.variant == VARIANTS.TRANSPARENT &&
    css`
      color: ${({ theme }) => theme.white};
      font-size: 1.2rem;
      border: 3px solid currentColor;
      padding: 1.2rem 4.5rem;
    `}
`;

export { ButtonBase };
