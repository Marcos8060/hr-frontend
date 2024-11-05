"use client";
import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { APP_API_URL } from "../api-endpoints";
import UseAxios from "../hooks/use-axios";
import { jwtDecode } from "jwt-decode";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const loginUser = async (email, password) => {
    const axiosInstance = UseAxios();
    try {
      const response = await axiosInstance.post(APP_API_URL.LOGIN, {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        const userDetails = response.data;
        localStorage.setItem("token", userDetails);
        const decodedUser = jwtDecode(userDetails);
        setUser(decodedUser);
        router.push("/dashboard");
      } else {
        toast.error(response.data.status.status_text);
      }
    } catch (error) {
      if (error.response.data.error === "Request failed with status code 400") {
        toast.error("please check your email and password");
      }
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("token");
    router.push("/");
  };

  let contextData = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    user: user,
  };

  // decode the token and set the user when a component mounts
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const decodedUser = jwtDecode(storedToken);
    setUser(decodedUser);
  }, []);

  return (
    <authContext.Provider value={contextData}>{children}</authContext.Provider>
  );
};
