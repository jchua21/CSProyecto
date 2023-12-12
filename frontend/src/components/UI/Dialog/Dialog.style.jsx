import styled from "styled-components";
import DialogTitleMUI from "@mui/material/DialogTitle";
import DialogActionsMUI from "@mui/material/DialogActions";

import Button from "../Button/Button";
import { fontSize, fontWeight } from "../../../config/styles/Typography";
import { breakpoints } from "../../../config/styles";

const DialogTitle = styled(DialogTitleMUI)`
  font-size: ${fontSize["xl"]};

  @media ${breakpoints.md} {
    font-size: ${fontSize["2xl"]};
  }
  font-weight: ${fontWeight.semibold};
  background: ${({ theme }) => theme["primary_main"]};
  color: ${({ theme }) => theme["white"]};
`;

const DialogImage = styled.img`
  height: 30rem;
  width: 100%;
`;

const DialogInf = styled.div`
  margin-block: 1.2rem;
  font-weight: ${fontWeight.semibold};

  & > p :is(a, span) {
    font-weight: ${fontWeight.medium};
    margin-left: 0.5rem;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

const DialogActions = styled(DialogActionsMUI)`
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  gap: 0.5rem;

  @media ${breakpoints.sm} {
    flex-direction: row;
    & > * {
      flex-basis: 50%;
    }
  }

  @media ${breakpoints.md} {
    justify-content: end;
    & > * {
      flex-basis: auto;
    }
  }

  && form {
    margin-left: 0;
  }
`;

const DialogButton = styled(Button)`
  && {
    width: 100%;
  }
`;

export { DialogTitle, DialogImage, DialogInf, DialogButton, DialogActions };
