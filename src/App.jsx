import { useState } from "react";
import LeftBar from "./components/LeftBar";
import LandingPage from "./components/LandingPage";
import SAV_daaLab_proj_1 from "./projects/sem_1/DAA_Lab/SAV_daaLab_proj_1";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <LeftBar />
      <div className="flex-1">
       
    <Routes>
      <Route path="/" element ={ <LandingPage />} />
      <Route path="/projects/sem_1/daa_lab/SAV_daaLab_proj_1" element={<SAV_daaLab_proj_1 />} />
    </Routes>
      </div>
    </div>
  );
}

export default App;
