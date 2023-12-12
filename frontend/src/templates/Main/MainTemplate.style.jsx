import styled from "styled-components";
import { breakpoints, utils } from "../../config/styles";

const DashboardGrid = styled.div`
  display: flex;
  height: 100dvh;
`;

const DashboardMain = styled.section`
  flex: 1 1 75%;
  padding: ${utils.pad_nav} 1.2rem;
  overflow: auto;

  @media ${breakpoints.sm} {
    padding: ${utils.pad_nav} 2.5rem;
  }
`;

const DashboardTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DashboardMenuButton = styled.button`
  all: unset;
  display: none;
  font-size: 2rem;
  width: min-content;
  color: ${({ theme }) => theme["black_light_color"]};

  @media ${breakpoints.sm} {
    display: grid;
    place-items: center;
  }

  &:hover {
    cursor: pointer;
  }
`;

const DashboardSearchBar = styled.div`
  flex-basis: 45%;
  max-width: 50rem;

  & form {
    position: relative;
    display: flex;
    align-items: center;
    border: 2px solid ${({ theme }) => theme["border_color"]};
    border-radius: 1.5rem;
    height: 4rem;
    min-width: 12rem;

    & svg {
      position: absolute;
      color: ${({ theme }) => theme["black_light_color"]};
      left: 1rem;
      min-width: 2rem;
    }

    & input[type="search"] {
      all: unset;
      position: absolute;
      left: 2.5rem;
      right: 0;
      flex-grow: 1;
      padding: 0.7rem 1.2rem;

      &::placeholder {
        color: ${({ theme }) => theme["black_light_color"]};
      }
    }
  }
`;

const DashboardUserBox = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

const DashboardContent = styled.main`
  margin-top: 3rem;
`;

export {
  DashboardGrid,
  DashboardMain,
  DashboardTopBox,
  DashboardMenuButton,
  DashboardSearchBar,
  DashboardUserBox,
  DashboardContent,
};
