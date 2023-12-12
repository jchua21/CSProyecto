import { NavBarItemBase } from "./NavBar.style";

const NavBarItem = ({ children, Icon, ...rest }) => {
  return (
    <NavBarItemBase {...rest}>
      <div>{Icon && <Icon />}</div>
      <span>{children}</span>
    </NavBarItemBase>
  );
};

export default NavBarItem;
