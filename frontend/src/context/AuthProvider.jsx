import { createContext } from "react";
import { redirect, useLoaderData, Outlet } from "react-router-dom";
import axiosClient from "../config/libraries/axios";

const AuthContext = createContext({});

export const loader = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return redirect("/auth/login");
  }

  //Build headers for authtentication
  try {
    const { data: user } = await axiosClient("/auth/perfil", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    //TODO
    const { data: responseEvents } = await axiosClient(`/enrollments`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const myEvents = responseEvents.map((item) => item.event);

    return {
      user,
      myEvents,
    };
  } catch (error) {
    console.log(error);
    return redirect("/auth/login");
  }
};

const AuthProvider = () => {
  const { user, myEvents } = useLoaderData({});

  return (
    <AuthContext.Provider
      value={{
        user,
        myEvents,
      }}
    >
      <Outlet />
    </AuthContext.Provider>
  );
};

// export { AuthContext, AuthProvider as default };
export default AuthContext;
export { AuthProvider };
