import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="h-screen flex flex-wrap  justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200">
        <h1 className="text-xl xl:text-5xl font-semibold xl:font-bold md:h-24 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          {" "}
          Academic Project Catalogue ! <div className="text-blue-400 text-sm">(Level - one)</div>
        </h1>
        {/* <div className="text-blue-400">(Level - one)</div> */}
      </div>
    </div>
  );
};

export default LandingPage;
