import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";

import { getPeeps } from "./utils/peepDataServices.js";

function App() {
  const [peeps, setPeeps] = useState([]);
  const [peepsError, setPeepsError] = useState({});

  useEffect(() => {
    getPeepsHandler();
  }, []);

  const getPeepsHandler = async () => {
    const externalDataCallResult = await getPeeps();

    if (externalDataCallResult?.error)
      setPeepsError(externalDataCallResult.error);
    setPeeps(externalDataCallResult.peeps);
  };

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Header />
        <div>
          <Routes>
            <Route
              path="/"
              element={<HomePage peeps={peeps} peepsError={peepsError} />}
            />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
