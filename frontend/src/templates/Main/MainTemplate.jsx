import { useState } from "react";
import { Form, Outlet, Link, redirect, useNavigate } from "react-router-dom";

import {
  DashboardGrid,
  DashboardMain,
  DashboardTopBox,
  DashboardMenuButton,
  DashboardSearchBar,
  DashboardUserBox,
  DashboardContent,
} from "./MainTemplate.style";

import {
  NavBarItem,
  NavBar,
  NavBarLogoBox,
  NavBarMenuBox,
  NavBarBottomBox,
  NavBarMenu,
  NavBarList,
} from "../../components/UI/NavBar";

import { logo, profile } from "../../constants/images";

import {
  FaHome,
  FaCalendarAlt,
  FaBars,
  FaSearch,
  FaCalendarPlus,
} from "react-icons/fa";
import { BiSolidLogOut } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";

const MainTemplate = () => {
  const [isActiveNavBar, setIsActiveNavBar] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    return navigate("/auth/login");
  };

  return (
    <DashboardGrid>
      <NavBar className={`${isActiveNavBar ? "active" : ""}`}>
        <NavBarLogoBox>
          <div>
            <img src={logo} alt="Image Logo" />
          </div>

          <span>AppName</span>
        </NavBarLogoBox>

        <NavBarMenuBox>
          <NavBarMenu>
            <NavBarList>
              <NavBarItem Icon={FaHome} to="/personal">
                Mis Eventos
              </NavBarItem>
            </NavBarList>

            <NavBarList>
              <NavBarItem Icon={FaCalendarAlt} to="/events">
                Eventos
              </NavBarItem>
            </NavBarList>

            {user.role === "doctor" && (
              <NavBarList>
                <NavBarItem Icon={FaCalendarPlus} to="/admin">
                  Panel
                </NavBarItem>
              </NavBarList>
            )}
          </NavBarMenu>

          <NavBarBottomBox>
            <NavBarItem Icon={BiSolidLogOut} as="button" onClick={handleLogOut}>
              Salir
            </NavBarItem>
          </NavBarBottomBox>
        </NavBarMenuBox>
      </NavBar>

      <DashboardMain>
        <DashboardTopBox>
          <DashboardMenuButton
            onClick={() => {
              setIsActiveNavBar(!isActiveNavBar);
            }}
          >
            <FaBars />
          </DashboardMenuButton>

          {/* as="search" */}
          <DashboardSearchBar>
            <Form>
              <FaSearch />
              <input type="search" name="q" placeholder="Busca aqui..." />
            </Form>
          </DashboardSearchBar>

          <DashboardUserBox>
            <img src={profile} alt="User" />
          </DashboardUserBox>
        </DashboardTopBox>

        <DashboardContent>
          <Outlet />
        </DashboardContent>
      </DashboardMain>
    </DashboardGrid>
  );
};

export default MainTemplate;
