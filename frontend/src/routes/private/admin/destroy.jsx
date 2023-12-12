import axiosClient from "../../../config/libraries/axios";
import Swal from "sweetalert2";

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  console.log(data);
  console.log("Desde destroy");

  const result = await Swal.fire({
    title: "Deseas eliminar este evento?",
    text: "No seras capaz de revertir esta accion!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar!",
  });

  if (result.isConfirmed) {
    try {
      const token = localStorage.getItem("token");

      await axiosClient.delete(`/events/${data.idEvent}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      Swal.fire({
        title: "Eliminado!",
        text: "El evento ha sido eliminado",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  return {};
};
