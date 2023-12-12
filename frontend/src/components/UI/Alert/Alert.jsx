import { AlertContainer } from "./Alert.style";

const Alert = ({ message, type } = {}) => {
  return <AlertContainer $type={type}>{message}</AlertContainer>;
};

export default Alert;
