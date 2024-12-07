import { useState } from "react";
import LeftBar from "./components/LeftBar";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import TodoWithPython_proj_1 from "./projects/sem_1/python/TodoWithPython_proj_1";
import SAV_daaLab_proj_2 from "./projects/sem_1/DAA_Lab/SAV_daaLab_proj_2";
import Analysis_of_the_Iris_Dataset_R_proj_3 from "./projects/sem_1/R_Lab/Analysis_of_the_Iris_Dataset_R_proj_3";
import LibraryManagementSystem_proj_4 from "./projects/sem_1/pl_sql_lab/LibraryManagementSystem_proj_4";

function App() {
  const [barOpen, setBarOpen] = useState(true);

  return (
    <div className="flex">
        <LeftBar barOpen={barOpen} setBarOpen={setBarOpen} />
      <div
        className={`transition-all duration-300 ${
          barOpen ? "ml-32 md:ml-52 xl:ml-64" : "ml-12"
        } flex-1`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/projects/sem_1/daa_lab/SAV_daaLab_proj_2"
            element={<SAV_daaLab_proj_2 />}
          />
          <Route
            path="/projects/sem_1/python/TodoWithPython_proj_1"
            element={<TodoWithPython_proj_1 />}
          />
          <Route
            path="/projects/sem_1/R_Lab/Analysis_of_the_Iris_Dataset_R_proj_3"
            element={<Analysis_of_the_Iris_Dataset_R_proj_3 />}
          />
          <Route
            path="/projects/sem_1/pl_sql_lab/LibraryManagementSystem_proj_4"
            element={<LibraryManagementSystem_proj_4 />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
