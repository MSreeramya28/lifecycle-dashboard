import { Children } from "react";

export const login = (username: string) => {
  const user = {
    username,
    role: "admin"
  };
  localStorage.setItem("user", JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem("user");
};
export const getUser = () => {
  return localStorage.getItem("user");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("user");
};