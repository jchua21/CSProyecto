import { useRef } from "react";

import { useActionData, useNavigate, useNavigation } from "react-router-dom";
import { css } from "styled-components";
import axios from "axios";

import { Alert, Button, Heading, Spinner } from "../../../components/UI";
import {
  FormBase,
  FormFieldGrid,
  FormInput,
  FormTextArea,
} from "../../../components/UI/Form";

import { validateCreateEvent } from "../../../validations/ActionEvent.validation";
import axiosClient from "../../../config/libraries/axios";
import { formatError } from "../../../helpers";
import useAuth from "../../../hooks/useAuth";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  //validate fields
  let validatedData = validateCreateEvent({
    ...data,
    image: data.image.name,
  });

  if (!validatedData.success) {
    const errorsArray = formatError(validatedData);

    return {
      success: false,
      errors: errorsArray,
    };
  }

  // Upload image in cloudinary
  const cloudinaryFormData = new FormData();
  cloudinaryFormData.append("file", formData.get("image"));
  cloudinaryFormData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_PRESET_CREATE
  );

  try {
    const {
      data: { url },
    } = await axios.post(
      import.meta.env.VITE_CLOUDINARY_URL,
      cloudinaryFormData
    );
    //Add url to the request object body
    validatedData = { ...validatedData.data, urlImage: url };
    //Send request
    const token = localStorage.getItem("token");

    await axiosClient.post("/events", validatedData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      success: true,
      message: "Evento Registrado Exitosamente",
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const CreatePage = () => {
  const alerts = useActionData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const formRef = useRef();
  const isSubmitting = navigation.state === "submitting";

  //Reset form and redirect
  if (alerts?.success === true) {
    formRef.current.reset();

    setTimeout(() => {
      navigate("/admin");
    }, 3000);
  }

  return (
    <>
      <Heading>
        Registra <span>Nuevos Eventos</span>
      </Heading>

      <FormBase
        method="POST"
        css={`
          margin: 0 auto;
        `}
        encType="multipart/form-data"
        ref={formRef}
      >
        <FormFieldGrid cols="1">
          <input type="hidden" name={"idDoctor"} value={user.id} />

          <FormInput
            type="text"
            placeholder="Nombre del evento"
            name={"nombre"}
          />

          <FormTextArea
            placeholder="Descripcion del eventeo"
            name={"descripcion"}
          ></FormTextArea>

          <FormInput
            min="1"
            type="number"
            placeholder="Aforo Ejm: 20"
            name={"aforo"}
          />

          <FormInput type="datetime-local" name={"datetime"} />

          <FormInput type="file" name={"image"} accept="image/*" />
        </FormFieldGrid>

        {alerts?.success === false && (
          <div>
            {alerts.errors.map((err, index) => (
              <Alert message={err} type={"error"} key={index} />
            ))}
          </div>
        )}

        {alerts?.success === true && (
          <Alert message={alerts.message} type={"success"} />
        )}

        <Button as="button" type="submit" value="login" disabled={isSubmitting}>
          {isSubmitting ? <Spinner /> : "Crear"}
        </Button>
      </FormBase>
    </>
  );
};

export default CreatePage;
