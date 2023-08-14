import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";

import { getPeeps } from "./utils/peepDataServices.js";

function App() {
  const [peeps, setPeeps] = useState([]);

  useEffect(() => {
    getPeepsHandler();
  }, []);

  const getPeepsHandler = async () => {
    const extDataCallRes = await getPeeps();
    console.log("DID IT WORK: ", extDataCallRes);
    // TODO: ERROR HANDLING
    setPeeps(extDataCallRes.peeps);
  };

  return (
    <>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage peeps={peeps} />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
