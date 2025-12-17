import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser("Vikash")}>
      Login
    </button>
  );
}

export default Login;
