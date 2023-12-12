import styled, { css } from "styled-components";
import { breakpoints } from "../../../config/styles";

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > a {
    align-self: self-end;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & svg {
      font-size: 2.2rem;
    }
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* table-layout: fixed; */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  overflow-x: auto;
`;

const THead = styled.thead`
  & tr {
    background-color: ${({ theme }) => theme["primary_main"]};
    color: ${({ theme }) => theme["white"]};
    text-transform: uppercase;
  }

  & th {
    width: calc(100% / 4);
  }
`;

const TBody = styled.tbody`
  & tr {
    border-bottom: 1px solid #dddddd;

    &:nth-of-type(even) {
      background-color: ${({ theme }) => theme["gray_lighten"]};
    }

    &:last-of-type {
      border-bottom: 2px solid ${({ theme }) => theme["primary_light"]};
    }
  }
`;

const Tr = styled.tr``;

const Th = styled.th`
  text-align: left;
  padding: 1rem 1.2rem;
`;

const Td = styled.td`
  padding: 1rem 1.2rem;

  ${(props) =>
    props.$action == true &&
    css`
      display: flex;
      flex-wrap: wrap;

      @media ${breakpoints.md} {
        flex-wrap: nowrap;
      }
      gap: 1.2rem;
    `}

  & img {
    min-width: 5rem;
    width: 5rem;
  }
`;

export { AdminContainer, Table, TableWrapper, THead, TBody, Tr, Th, Td };
