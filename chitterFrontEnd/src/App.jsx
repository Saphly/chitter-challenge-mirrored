import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import LoginRegisterModal from "./Components/LoginRegisterModal";

import { getPeeps } from "./utils/peepDataServices.js";
import { login } from "./utils/loginServices.js";

function App() {
  const [peeps, setPeeps] = useState([]);
  const [peepsError, setPeepsError] = useState({});
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getPeepsHandler();
  }, []);

  const getPeepsHandler = async () => {
    const externalDataCallResult = await getPeeps();

    if (externalDataCallResult?.error)
      setPeepsError(externalDataCallResult.error);
    setPeeps(externalDataCallResult.peeps);
  };

  const loginHandler = async (loginDetails) => {
    const loginResult = await login(loginDetails);

    console.log(loginResult);
    if (loginResult?.error) {
      setErrorMessage(loginResult.error.message);
    }

    setUser(loginResult.user);
  };

  const logoutHandler = () => {
    setUser({});
  };

  return (
    <>
      <LoginRegisterModal
        loginHandler={(loginDetails) => loginHandler(loginDetails)}
      />
      <div style={{ minHeight: "100vh" }}>
        <Header user={user} logoutHandler={() => logoutHandler()} />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage peeps={peeps} peepsError={peepsError} user={user} />
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
