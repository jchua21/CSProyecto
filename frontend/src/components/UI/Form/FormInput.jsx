import { FormInputBase, FormWrapperInputBase } from "./Form.style";

const FormInput = ({ Icon, ...rest }) => {
  return (
    <FormWrapperInputBase>
      {Icon && <Icon />}
      <FormInputBase {...rest}></FormInputBase>
    </FormWrapperInputBase>
  );
};

export default FormInput;
