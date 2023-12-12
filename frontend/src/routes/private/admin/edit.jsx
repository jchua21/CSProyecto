import { useRef } from "react";
import axios from "axios";

import {
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { css } from "styled-components";

import { Alert, Button, Heading, Spinner } from "../../../components/UI";
import {
  FormBase,
  FormFieldGrid,
  FormInput,
  FormTextArea,
} from "../../../components/UI/Form";

import { validateUpdateEvent } from "../../../validations/ActionEvent.validation";
import axiosClient from "../../../config/libraries/axios";
import { formatError } from "../../../helpers";
import useAuth from "../../../hooks/useAuth";

export const loader = async ({ params }) => {
  try {
    const { id } = params;

    const token = localStorage.getItem("token");

    console.log("IDDD, ", id);

    const { data } = await axiosClient(`/events/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const action = async ({ request, params }) => {
  const { id } = params;

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  //validate fields
  let validatedData = validateUpdateEvent({
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
  cloudinaryFormData.append("file", data["image"]);
  cloudinaryFormData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_PRESET_UPDATE
  );

  try {
    validatedData = { ...validatedData.data };
    if (validatedData.image.length > 0) {
      const {
        data: { url },
      } = await axios.post(
        import.meta.env.VITE_CLOUDINARY_URL,
        cloudinaryFormData
      );
      //Add url to the request object body
      validatedData.urlImage = url;
    }

    //Send request
    const token = localStorage.getItem("token");

    await axiosClient.patch(`/events/${id}`, validatedData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      success: true,
      message: "Evento Actualizado Exitosamente",
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const EditPage = () => {
  const event = useLoaderData();
  const alerts = useActionData();
  console.log(alerts);
  const { user } = useAuth();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const formRef = useRef();
  const isSubmitting = navigation.state === "submitting";

  if (alerts?.success === true) {
    formRef.current.reset();

    setTimeout(() => {
      navigate("/admin");
    }, 3000);
  }

  return (
    <>
      <Heading>
        Actualiza <span>Tus Eventos</span>
      </Heading>

      <FormBase
        method="PUT"
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
            defaultValue={event.nombre}
          />

          <FormTextArea
            placeholder="Descripcion del eventeo"
            name={"descripcion"}
            defaultValue={event.descripcion}
          ></FormTextArea>

          <FormInput
            min="1"
            type="number"
            placeholder="Aforo Ejm: 20"
            name={"aforo"}
            defaultValue={event.aforo}
          />

          <FormInput
            type="datetime-local"
            name={"datetime"}
            defaultValue={event.datetime}
          />

          <img src={event.urlImage} alt="" />
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
          {isSubmitting ? <Spinner /> : "Editar"}
        </Button>
      </FormBase>
    </>
  );
};

export default EditPage;
