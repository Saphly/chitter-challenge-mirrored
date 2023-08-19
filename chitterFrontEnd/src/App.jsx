import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import LoginRegisterModal from "./Components/LoginRegisterModal";

import { getPeeps, postPeeps } from "./utils/peepDataServices.js";
import { login } from "./utils/loginServices.js";
import { register } from "./utils/registerServices.js";

function App() {
  const [peeps, setPeeps] = useState([]);
  const [peepsError, setPeepsError] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    getPeepsHandler();
  }, []);

  const getPeepsHandler = async () => {
    setPeepsError({});

    const externalDataCallResult = await getPeeps();

    if (externalDataCallResult?.error)
      setPeepsError(externalDataCallResult.error);

    setPeeps(externalDataCallResult.peeps);
  };

  const loginHandler = async (loginDetails) => {
    const loginResult = await login(loginDetails);

    if (loginResult?.error) {
      alert(loginResult.error.message);
    }

    if (loginResult.user.name) {
      alert(loginResult.message);
      setUser(loginResult.user);
    }
  };

  const logoutHandler = () => {
    setUser({});
  };

  const registerHandler = async (registerDetails) => {
    const registerResult = await register(registerDetails);

    if (registerResult?.error) {
      alert(registerResult.error.message);
    } else {
      alert(`${registerResult.message}! Please proceed to login.`);
    }
  };

  const postPeepHandler = async (newPeep) => {
    const peepDetails = {
      peep: newPeep.peep,
      dateCreated: new Date().toISOString(),
      name: user.name,
      username: user.username,
    };

    const postPeepResult = await postPeeps(peepDetails);
    console.log(postPeepResult);
    if (postPeepResult?.error) {
      alert(postPeepResult.error.message);
    }

    await getPeepsHandler();
  };

  return (
    <>
      <LoginRegisterModal
        loginHandler={(loginDetails) => loginHandler(loginDetails)}
        registerHandler={(registerDetails) => registerHandler(registerDetails)}
      />
      <div style={{ minHeight: "100vh" }}>
        <Header user={user} logoutHandler={() => logoutHandler()} />
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  peeps={peeps}
                  peepsError={peepsError}
                  user={user}
                  postPeepHandler={(newPeepDetails) =>
                    postPeepHandler(newPeepDetails)
                  }
                />
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
