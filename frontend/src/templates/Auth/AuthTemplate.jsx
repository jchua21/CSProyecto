import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthTemplateContainer, AuthTemplateGrid } from "./AuthTemplate.style";

const AuthTemplate = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleClickSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <AuthTemplateContainer className={`${isSignUp ? "signUpMode" : ""}`}>
      <AuthTemplateGrid>
        <Outlet
          context={{
            isSignUp,
            handleClickSignUp,
          }}
        />
      </AuthTemplateGrid>
    </AuthTemplateContainer>
  );
};

export default AuthTemplate;
