import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <>
      <div className="bg-purple-800 font-">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
