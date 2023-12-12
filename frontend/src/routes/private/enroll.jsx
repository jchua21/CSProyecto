import axiosClient from "../../config/libraries/axios";

//It is executed when someone enrolll or unenrollto an event
export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const token = localStorage.getItem("token");

    if (data.isEnrolled === "true") {
      console.log("Deleting...");

      const { data: responseData } = await axiosClient.delete(
        `/enrollments/${data.eventId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return { responseData };
    }

    console.log("Enrolling...");

    const { data: responseData } = await axiosClient.post(
      `/enrollments`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { responseData };
  } catch (error) {
    console.log(error);
    return error;
  }
};
