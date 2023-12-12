import styled from "styled-components";
import { breakpoints, utils } from "../../../config/styles";
import { fontWeight, fontSize } from "../../../config/styles/Typography";
import { NavLink } from "react-router-dom";

const NavBarItemBase = styled(NavLink)`
  all: unset;
  display: flex;
  align-items: center;
  height: 5rem;
  white-space: nowrap;
  cursor: pointer;

  &:is(.active, :hover) {
    color: ${({ theme }) => theme["primary_light"]};
    font-weight: ${fontWeight.semibold};

    & svg {
      color: ${({ theme }) => theme["primary_light"]};
    }
  }

  & > div {
    display: grid;
    place-items: center;
    color: ${({ theme }) => theme["black_light_color"]};
    height: 100%;
    min-width: 5rem;

    & svg {
      font-size: 3rem;
    }
  }

  & span {
    opacity: 0;
    pointer-events: none;
    transition: opacity ${utils.trans_3};

    @media ${breakpoints.sm} {
      opacity: 1;
      pointer-events: all;
      margin-left: 1.5rem;
    }
  }

  // NavBar
  .active & span {
    opacity: 0;
    pointer-events: none;
  }
`;

const NavBar = styled.nav`
  width: calc(${utils.pad_nav} + ${utils.width_nav} + ${utils.pad_nav});
  border-right: 1.2px solid ${({ theme }) => theme["border_color"]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: ${utils.pad_nav};
  transition: width ${utils.trans_3};

  @media ${breakpoints.sm} {
    width: 28rem;

    &.active {
      width: calc(${utils.pad_nav} + ${utils.width_nav} + ${utils.pad_nav});
    }
  }
`;

const NavBarLogoBox = styled.div`
  display: flex;
  align-items: center;

  & div {
    display: grid;
    place-items: center;
    min-width: ${utils.width_nav};
    height: auto;
  }
  & img {
    border-radius: 50%;
    object-fit: cover;
    width: 5rem;
  }

  & span {
    opacity: 0;
    pointer-events: unset;
    font-weight: ${fontWeight.semibold};
    font-size: ${fontSize["xl"]};
    transition: opacity ${utils.trans_3};
    margin-left: 1.2rem;

    @media ${breakpoints.sm} {
      opacity: 1;
      pointer-events: all;
    }

    .active & {
      opacity: 0;
      pointer-events: none;
    }
  }
`;

const NavBarMenuBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavBarMenu = styled.ul``;

const NavBarList = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const NavBarBottomBox = styled.div`
  white-space: nowrap;
`;

export {
  NavBarItemBase,
  NavBar,
  NavBarLogoBox,
  NavBarMenuBox,
  NavBarBottomBox,
  NavBarMenu,
  NavBarList,
};
