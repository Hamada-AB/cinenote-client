// COMPONENTS
import Register from "./Register";
import Login from "./Login";

export default function HomePage({
  successfulMessage,
  setSuccessfulMessage,
  setToken,
  setUserInfo,
  baseURL,
}) {
  return (
    <>
      <div className="home-page">
        <div className="logo">
          <h1 className="name">
            Cine<span>Note</span>
          </h1>
          <p>
            CineNote is an innovative web application that allows movie
            enthusiasts to create personalized addresses for their favorite
            films. Users can create an account and add movies to their unique
            address by providing the movie&#39;s title, description, and
            runtime. This app provides a simple way to catalog and save your
            movie collection.
          </p>
          {successfulMessage && (
            <p className="successful-message">{successfulMessage}</p>
          )}
        </div>
        <div className="access">
          <Login
            setToken={setToken}
            setUserInfo={setUserInfo}
            baseURL={baseURL}
          />
          <p className="or"> OR </p>
          <Register
            baseURL={baseURL}
            setSuccessfulMessage={setSuccessfulMessage}
            setToken={setToken}
            setUserInfo={setUserInfo}
          />
        </div>
      </div>
    </>
  );
}
