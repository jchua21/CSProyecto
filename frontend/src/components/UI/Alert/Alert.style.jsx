import styled, { css } from "styled-components";
import { fontSize, fontWeight } from "../../../config/styles/Typography";
import { breakpoints } from "../../../config/styles";

const AlertContainer = styled.div`
  text-transform: uppercase;
  font-size: ${fontSize.xs};
  text-align: center;
  color: white;
  margin-top: 1rem;
  font-weight: ${fontWeight.medium};
  padding: 1rem 3rem;

  @media ${breakpoints.md} {
    font-size: ${fontSize.sm};
  }

  ${(props) =>
    props.$type === "error" &&
    css`
      background-image: linear-gradient(to right, #f87171, #d62626);
    `}

  ${(props) =>
    props.$type === "success" &&
    css`
      background-image: linear-gradient(to right, #6d28d9, #a78bfa);
    `}
`;

export { AlertContainer };
