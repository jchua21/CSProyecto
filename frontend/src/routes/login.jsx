import { useOutletContext, useActionData, redirect } from "react-router-dom";
import { useRef } from "react";

import {
  AuthTemplateSide,
  AuthTemplateImage,
  AuthTemplateSuggest,
  AuthTemplateBox,
  AuthTemplateBoxAlerts,
} from "../templates/Auth/AuthTemplate.style";

import {
  FormBase,
  FormInput,
  FormHeader,
  FormFieldGrid,
} from "../components/UI/Form";
import { Button, Alert } from "../components/UI";

import {
  validateLogin,
  validateRegister,
} from "../validations/Auth.validation";

import axiosClient from "../config/libraries/axios";

import { loginImg, registerImg } from "../constants/images";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ACTION_TYPES = {
  LOGIN: "login",
  REGISTER: "register",
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  //Transform data into an object
  const data = Object.fromEntries(formData);

  let validatedData = {};

  if (data.intent === ACTION_TYPES.LOGIN) {
    validatedData = validateLogin(data);
  }

  if (data.intent === ACTION_TYPES.REGISTER) {
    validatedData = validateRegister(data);
  }

  //If data is not correct
  if (!validatedData.success) {
    const errors = validatedData.error.flatten();
    // console.log(errors);
    let errorsArray = [];

    //Fill array with all the error messages
    for (const err in errors.fieldErrors) {
      errorsArray = [...errorsArray, ...errors.fieldErrors[err]];
    }

    errorsArray = [...errorsArray, ...errors.formErrors];

    return {
      success: false,
      errors: errorsArray,
    };
  }

  // Destructuring data already validated
  const { data: acceptedData } = validatedData;

  //SEND REQUEST
  try {
    if (data.intent === ACTION_TYPES.LOGIN) {
      //Log in user

      const {
        data: { token },
      } = await axiosClient.post("/auth/login", acceptedData);

      //Store the token in local storage
      localStorage.setItem("token", token);
      // return redirect("/personal");
      return redirect("/events");
    } else {
      //Send request to create new user
      const { confirm_password, ...fields } = acceptedData;
      const response = await axiosClient.post("/auth/registrar", fields);

      return {
        success: true,
        msg: "Cuenta Creada Exitosamente, revisa tu correo para confirmar",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      errors: [err.response.data.msg],
    };
  }
};

const LoginPage = () => {
  //Move forms
  const { handleClickSignUp } = useOutletContext();
  // Action
  const result = useActionData();
  //Refs to both forms
  const registerFormRef = useRef(null);
  const loginFormRef = useRef(null);

  let alerts = [];
  if (result) {
    if (result.success) {
      alerts = [result.msg];
      registerFormRef.current.reset();
    } else {
      alerts = result.errors;
    }
  }

  return (
    <>
      <AuthTemplateSide className="left">
        <AuthTemplateSuggest>
          <h3>Eres nuevo aqui?</h3>
          <p>
            Únete a nuestra comunidad hoy mismo y descubre todo lo que tenemos
            para ofrecer.
          </p>

          <Button
            variant="transparent"
            rounded="md"
            onClick={handleClickSignUp}
          >
            Registrarse
          </Button>
        </AuthTemplateSuggest>

        <AuthTemplateImage src={loginImg} />
      </AuthTemplateSide>

      <AuthTemplateBox>
        <FormBase method="POST" ref={loginFormRef}>
          <FormHeader>Iniciar Sesion</FormHeader>
          <FormFieldGrid cols="1">
            <FormInput
              type="email"
              placeholder="Tu Email"
              Icon={FaUser}
              name={"email"}
              rounded="md"
            />
            <FormInput
              type="password"
              placeholder="Tu Contraseña"
              Icon={FaLock}
              name="password"
              rounded="md"
            />
          </FormFieldGrid>

          {/* Show Alerts*/}
          {alerts.length > 0 && (
            <AuthTemplateBoxAlerts>
              {alerts.map((item, index) => (
                <Alert
                  key={index}
                  message={item}
                  type={result.success ? "success" : "error"}
                />
              ))}
            </AuthTemplateBoxAlerts>
          )}

          <Button
            variant="primary"
            as="button"
            type="submit"
            name="intent"
            value="login"
            rounded="md"
          >
            Login
          </Button>
        </FormBase>

        <FormBase method="POST" ref={registerFormRef}>
          <FormHeader>Crear Cuenta</FormHeader>
          <FormFieldGrid cols="1">
            <FormInput
              type="text"
              placeholder="Ingresa tu nombre"
              Icon={FaUser}
              name={"nombre"}
              rounded="md"
            />
            <FormInput
              type="email"
              placeholder="Ingresa tu Email"
              Icon={MdEmail}
              name={"email"}
              rounded="md"
            />
            <FormInput
              type="password"
              placeholder="Ingresa tu contraseña"
              Icon={FaLock}
              name={"password"}
              rounded="md"
            />
            <FormInput
              type="password"
              placeholder="Repite tu contraseña"
              Icon={FaLock}
              name={"confirm_password"}
              rounded="md"
            />
          </FormFieldGrid>

          {/* Show Alerts*/}
          {alerts.length > 0 && (
            <AuthTemplateBoxAlerts>
              {alerts.map((item, index) => (
                <Alert
                  key={index}
                  message={item}
                  type={result.success ? "success" : "error"}
                />
              ))}
            </AuthTemplateBoxAlerts>
          )}

          <Button
            variant="primary"
            as="button"
            type="submit"
            name="intent"
            value="register"
            rounded="md"
          >
            Registrarse
          </Button>
        </FormBase>
      </AuthTemplateBox>

      <AuthTemplateSide className="right">
        <AuthTemplateSuggest>
          <h3>Uno de Nosotros?</h3>
          <p>
            Si ya eres parte de nuestra comunidad, inicia sesión para explorar
            las últimas novedades,
          </p>

          <Button
            variant="transparent"
            rounded="md"
            onClick={handleClickSignUp}
          >
            Iniciar Sesion
          </Button>
        </AuthTemplateSuggest>

        <AuthTemplateImage src={registerImg} />
      </AuthTemplateSide>
    </>
  );
};

export default LoginPage;
