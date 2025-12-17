import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <p>Welcome, {user}</p>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}

export default Home;
