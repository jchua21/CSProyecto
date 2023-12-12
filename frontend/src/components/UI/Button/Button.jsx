import { ButtonBase } from "./Button.style";

const Button = ({ children, ...rest }) => {
  return <ButtonBase {...rest}>{children}</ButtonBase>;
};

export default Button;
