import { useState } from "react";

// COMPONENTS
import HomePage from "./components/HomePage";
import MainPage from "./components/MainPage";

const baseURL = "https://cinenote-server.onrender.com";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("jwt"));
  const [userInfo, setUserInfo] = useState(getUserInfo);
  const [successfulMessage, setSuccessfulMessage] = useState("");

  function getUserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

  return (
    <>
      {!token ? (
        <HomePage
          successfulMessage={successfulMessage}
          setSuccessfulMessage={setSuccessfulMessage}
          setToken={setToken}
          setUserInfo={setUserInfo}
          baseURL={baseURL}
        />
      ) : (
        <MainPage
          token={token}
          setToken={setToken}
          setSuccessfulMessage={setSuccessfulMessage}
          userInfo={userInfo}
          baseURL={baseURL}
        />
      )}
    </>
  );
}
